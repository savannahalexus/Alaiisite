# Content Update API Architecture

## System Overview

```
Claude Bot → POST /api/content/create → GitHub Repo → Vercel Deploy
```

## Setup Instructions

### 1. Create API Endpoint (Vercel Serverless Function)

```typescript
// api/content/create.ts
import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
  const { title, slug, content, category } = req.body;
  const apiKey = req.headers['x-api-key'];
  
  // Verify API key
  if (apiKey !== process.env.CONTENT_API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Create new guide file
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  
  const fileContent = generateGuideTemplate({ title, slug, content });
  
  await octokit.repos.createOrUpdateFileContents({
    owner: 'your-username',
    repo: 'alaii-landing',
    path: `src/app/pages/guides/${slug}.tsx`,
    message: `Add new guide: ${title}`,
    content: Buffer.from(fileContent).toString('base64'),
  });
  
  // Also update sitemap
  await updateSitemap(slug);
  
  res.status(200).json({ success: true, slug });
}
```

### 2. Claude Bot Integration

Your bot would make requests like:

```bash
curl -X POST https://alaii.app/api/content/create \
  -H "X-API-Key: your-secret-key" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "resources",
    "slug": "esthetician-100k-guide",
    "title": "How Estheticians Build $100k+ Businesses",
    "metaDescription": "...",
    "keywords": "...",
    "tips": [...]
  }'
```

### 3. Automated Content Generation Script

```javascript
// scripts/generate-guide.js
const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function generateGuide(industry) {
  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 4096,
    messages: [{
      role: 'user',
      content: `Create a comprehensive $200k revenue guide for ${industry}. 
      Include 7 actionable tips with specific revenue metrics and how alaii helps with each.
      Format as JSON matching this structure: { title, metaDescription, keywords, tips: [...] }`
    }]
  });
  
  const guideData = JSON.parse(message.content[0].text);
  
  // POST to your API
  await fetch('https://alaii.app/api/content/create', {
    method: 'POST',
    headers: {
      'X-API-Key': process.env.CONTENT_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guideData)
  });
}

// Schedule: Generate new guide weekly
generateGuide('Nail Technicians');
```

## Security Considerations

1. **API Key Authentication**: Use secure API keys (store in GitHub Secrets)
2. **Rate Limiting**: Prevent abuse with rate limits
3. **Content Validation**: Verify generated content before publishing
4. **Manual Review**: Create PRs instead of direct commits for human approval

## Deployment Options

### Option A: Fully Automated
Claude generates → API posts → Auto-deploys to production

### Option B: Review Required (Safer)
Claude generates → Creates PR → Human reviews → Merges → Deploys

**Recommended: Option B** for quality control
