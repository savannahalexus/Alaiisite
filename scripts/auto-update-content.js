#!/usr/bin/env node

/**
 * Auto Content Updater for alaii Resources
 * 
 * Usage:
 *   node scripts/auto-update-content.js --industry "Nail Technicians"
 *   node scripts/auto-update-content.js --update-existing "barber-200k-year-guide"
 * 
 * Environment Variables Required:
 *   ANTHROPIC_API_KEY - Your Claude API key
 */

const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs').promises;
const path = require('path');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Industry queue for automated content generation
const INDUSTRY_QUEUE = [
  'Nail Technicians',
  'Lash Artists',
  'Brow Specialists',
  'Chiropractors',
  'Physical Therapists',
  'Nutritionists',
  'Life Coaches',
  'Dance Instructors',
  'Martial Arts Studios',
  'CrossFit Gyms'
];

async function generateGuideContent(industry) {
  console.log(`🤖 Asking Claude to generate guide for: ${industry}`);
  
  const prompt = `You are an expert business consultant for service-based businesses.

Create a comprehensive revenue growth guide for ${industry} who want to build a $200k/year business.

REQUIREMENTS:
1. Follow the EXACT format of existing guides (7 actionable tips)
2. Include specific revenue metrics for each tip (e.g., "Revenue impact: +$30k-$50k/year")
3. For each tip, explain how alaii (an all-in-one booking, payments, and client management platform) helps
4. Use real numbers and practical advice
5. Make it genuinely helpful, not just a sales pitch

Return ONLY a valid JSON object with this structure:
{
  "slug": "industry-200k-year-guide" (kebab-case),
  "title": "How [Industry] Hit $200k/Year: 7 Proven Strategies",
  "metaTitle": "SEO-optimized title (60 chars max)",
  "metaDescription": "SEO-optimized description (155 chars max)",
  "keywords": "comma-separated keywords for SEO",
  "industry": "${industry}",
  "icon": "relevant emoji",
  "color": "tailwind gradient (e.g., from-blue-400 to-cyan-400)",
  "intro": "1-2 sentence intro explaining the income gap",
  "currentState": "Brief description of average earnings/state",
  "goalState": "Brief description of $200k+ state",
  "tips": [
    {
      "title": "Tip title",
      "description": "2-3 sentence overview",
      "metric": "Revenue impact: +$Xk-$Yk/year",
      "details": ["Bullet point 1", "Bullet point 2", ...],
      "alaiiConnection": "How alaii helps with this specific strategy"
    }
  ]
}`;

  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 8192,
    temperature: 0.7,
    messages: [{
      role: 'user',
      content: prompt
    }]
  });
  
  const responseText = message.content[0].text;
  
  // Extract JSON (Claude might wrap it in markdown)
  const jsonMatch = responseText.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error('Failed to extract JSON from Claude response');
  }
  
  return JSON.parse(jsonMatch[0]);
}

async function createGuidePage(guideData) {
  const slug = guideData.slug;
  console.log(`📝 Creating guide page: ${slug}`);
  
  // Read the current GuidePage.tsx to extract the structure
  const guidePagePath = path.join(__dirname, '../src/app/pages/GuidePage.tsx');
  const guidePageContent = await fs.readFile(guidePagePath, 'utf-8');
  
  // Extract the guides object and add new guide
  const guidesMatch = guidePageContent.match(/const guides: Record<string, GuideContent> = \{([\s\S]*?)\};/);
  if (!guidesMatch) {
    throw new Error('Could not find guides object in GuidePage.tsx');
  }
  
  // Format new guide as TypeScript
  const newGuideEntry = `
  '${slug}': ${JSON.stringify(guideData, null, 2).replace(/"([^"]+)":/g, '$1:')},`;
  
  // Insert before the closing brace
  const updatedContent = guidePageContent.replace(
    /(\n};\/\/ End of guides)/,
    newGuideEntry + '$1'
  );
  
  await fs.writeFile(guidePagePath, updatedContent, 'utf-8');
  console.log('✅ Updated GuidePage.tsx');
}

async function updateSitemap(slug) {
  console.log('🗺️  Updating sitemap.xml');
  
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const sitemap = await fs.readFile(sitemapPath, 'utf-8');
  
  const newEntry = `
  <url>
    <loc>https://alaii.app/resources/${slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  
  const updated = sitemap.replace('</urlset>', newEntry + '\n</urlset>');
  await fs.writeFile(sitemapPath, updated, 'utf-8');
  console.log('✅ Updated sitemap.xml');
}

async function updateResourcesPage(guideData) {
  console.log('📄 Updating ResourcesPage.tsx');
  
  const resourcesPath = path.join(__dirname, '../src/app/pages/ResourcesPage.tsx');
  const content = await fs.readFile(resourcesPath, 'utf-8');
  
  const newGuideCard = `  {
    slug: '${guideData.slug}',
    title: '${guideData.title}',
    description: '${guideData.metaDescription}',
    industry: '${guideData.industry}',
    icon: '${guideData.icon}',
    color: '${guideData.color}',
  },`;
  
  const updated = content.replace(
    /(const guides = \[)/,
    `$1\n${newGuideCard}`
  );
  
  await fs.writeFile(resourcesPath, updated, 'utf-8');
  console.log('✅ Updated ResourcesPage.tsx');
}

async function createNewGuide(industry) {
  try {
    console.log(`\n🚀 Starting guide creation for: ${industry}\n`);
    
    // 1. Generate content with Claude
    const guideData = await generateGuideContent(industry);
    console.log(`✅ Generated content for: ${guideData.title}\n`);
    
    // 2. Update GuidePage.tsx
    await createGuidePage(guideData);
    
    // 3. Update ResourcesPage.tsx
    await updateResourcesPage(guideData);
    
    // 4. Update sitemap.xml
    await updateSitemap(guideData.slug);
    
    console.log('\n🎉 SUCCESS! New guide created.');
    console.log(`📍 URL: https://alaii.app/resources/${guideData.slug}`);
    console.log('\n📋 Next steps:');
    console.log('1. Review the generated content');
    console.log('2. Commit changes: git add . && git commit -m "Add ' + industry + ' guide"');
    console.log('3. Push to deploy: git push origin main\n');
    
    return guideData;
  } catch (error) {
    console.error('❌ Error creating guide:', error.message);
    throw error;
  }
}

async function batchGenerateGuides() {
  console.log(`🔄 Batch generating ${INDUSTRY_QUEUE.length} guides...\n`);
  
  for (const industry of INDUSTRY_QUEUE) {
    try {
      await createNewGuide(industry);
      console.log(`✅ Completed: ${industry}\n`);
      
      // Wait 5 seconds between requests to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 5000));
    } catch (error) {
      console.error(`❌ Failed for ${industry}:`, error.message);
      // Continue with next industry
    }
  }
  
  console.log('🎉 Batch generation complete!');
}

// CLI Interface
const args = process.argv.slice(2);

if (args.includes('--batch')) {
  batchGenerateGuides();
} else if (args.includes('--industry')) {
  const industryIndex = args.indexOf('--industry') + 1;
  const industry = args[industryIndex];
  if (!industry) {
    console.error('❌ Please provide an industry name: --industry "Nail Technicians"');
    process.exit(1);
  }
  createNewGuide(industry);
} else {
  console.log(`
alaii Content Auto-Updater 🤖

Usage:
  node scripts/auto-update-content.js --industry "Nail Technicians"
  node scripts/auto-update-content.js --batch

Options:
  --industry "Name"   Generate a single guide for the specified industry
  --batch             Generate all guides in the queue

Environment Variables:
  ANTHROPIC_API_KEY   Your Claude API key (required)

Examples:
  ANTHROPIC_API_KEY=sk-xxx node scripts/auto-update-content.js --industry "Chiropractors"
  ANTHROPIC_API_KEY=sk-xxx node scripts/auto-update-content.js --batch
  `);
}

module.exports = { createNewGuide, batchGenerateGuides };
