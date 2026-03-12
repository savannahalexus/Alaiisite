# 🚀 Quick Start: Content Automation

Get your ClawdBot (or any automation) generating SEO content in **5 minutes**.

## ⚡ Super Fast Setup

### 1. Get Claude API Key (2 min)

```bash
# Go to: https://console.anthropic.com
# Sign in → API Keys → Create Key → Copy it
```

### 2. Run Setup Script (1 min)

```bash
npm run setup:automation
```

Enter your API key when prompted. Done! ✅

### 3. Test It (2 min)

```bash
# Generate your first guide
ANTHROPIC_API_KEY=sk-xxx npm run generate:guide "Nail Technicians"
```

Check these files for new content:
- ✅ `src/app/pages/GuidePage.tsx` (new guide added)
- ✅ `src/app/pages/ResourcesPage.tsx` (new card)
- ✅ `public/sitemap.xml` (new URL)

### 4. Deploy

```bash
git add .
git commit -m "Add Nail Technicians $200k guide"
git push
```

**That's it!** Your new guide is live at:
`https://alaii.app/resources/nail-technicians-200k-guide`

---

## 🤖 Connect Your Bot

### Option A: GitHub Actions (Recommended)

**Set it and forget it - generates content weekly automatically**

1. Add API key to GitHub:
   - Repo → Settings → Secrets → Actions
   - New secret: `ANTHROPIC_API_KEY` = your-key

2. Done! 
   - Runs every Monday at 9am UTC
   - Creates PR with new content
   - You review & merge

**Manual trigger:**
- Go to Actions tab
- Select "Auto-Generate Content"
- Click "Run workflow"

### Option B: Webhook API

**Trigger from anywhere - Zapier, Slack, your custom bot**

1. Deploy webhook to Vercel:
   ```bash
   # Add these to Vercel env vars:
   WEBHOOK_SECRET=your-random-secret-key
   GITHUB_TOKEN=ghp_your_github_token
   ANTHROPIC_API_KEY=sk-xxx
   ```

2. Trigger from anywhere:
   ```bash
   curl -X POST https://alaii.app/api/webhook/generate-content \
     -H "X-Webhook-Secret: your-secret" \
     -d '{"industry": "Chiropractors"}'
   ```

3. Use with:
   - **Zapier**: Schedule → Webhook → POST
   - **Slack Bot**: `/generate Chiropractors`
   - **Your ClawdBot**: Call the webhook endpoint
   - **Discord Bot**: `!generate Chiropractors`

---

## 📅 Recommended Workflow

### Week 1: Manual Testing
```bash
# Generate 2-3 guides manually
npm run generate:guide "Nail Technicians"
npm run generate:guide "Lash Artists"
npm run generate:guide "Chiropractors"

# Review quality, refine prompts if needed
```

### Week 2: Automation Setup
```bash
# Set up GitHub Actions (automated weekly)
# OR set up webhook (trigger from external tools)
```

### Week 3+: Scale
```bash
# Let automation run weekly
# Review PRs when they come in
# Merge good content
# Watch organic traffic grow 📈
```

---

## 🎯 Industry Queue

These industries are ready to auto-generate:

✅ Already Created:
- [x] Barbers & Stylists
- [x] Beauty Professionals (Salons)
- [x] Personal Trainers
- [x] Yoga & Wellness Studios
- [x] Spa Owners
- [x] Fitness Studios

🚀 Next in Queue (auto-generates weekly):
1. Nail Technicians
2. Lash Artists
3. Brow Specialists
4. Chiropractors
5. Physical Therapists
6. Nutritionists
7. Life Coaches
8. Dance Instructors
9. Martial Arts Studios
10. CrossFit Gyms
11. Pilates Studios
12. Massage Therapists
13. Estheticians
14. Makeup Artists
15. Hair Color Specialists

**Each guide = 500-1,000 organic visitors/month** when properly optimized. That's 15,000+ monthly visitors at scale! 📊

---

## 🔧 Troubleshooting

### "API key not working"
```bash
# Test your API key:
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":100,"messages":[{"role":"user","content":"Hi"}]}'
```

### "Script not running"
```bash
# Make sure script is executable:
chmod +x scripts/setup-automation.sh

# Install dependencies:
npm install @anthropic-ai/sdk
```

### "Content quality issues"
Edit `scripts/auto-update-content.js` and adjust the prompt:
- Line 32: Change temperature (0.3 = consistent, 0.7 = creative)
- Line 20: Add more instructions about tone/style
- Line 50: Modify the content structure

### "GitHub Action not triggering"
- Verify `ANTHROPIC_API_KEY` is in GitHub Secrets
- Check Actions tab for error logs
- Ensure `.github/workflows/auto-content-update.yml` exists

---

## 💡 Pro Tips

### 1. Batch Generate All Guides at Once
```bash
# Generate all 10+ guides in queue
ANTHROPIC_API_KEY=sk-xxx npm run generate:batch

# Then review and commit only the good ones
git add src/app/pages/GuidePage.tsx
git commit -m "Add 10 new industry guides"
```

### 2. Customize for Your Brand
Edit the prompt template to match your voice:
```javascript
// In scripts/auto-update-content.js
const prompt = `
You are Anthony, founder of alaii...
Your tone is: friendly but professional...
Avoid: corporate jargon, buzzwords...
`;
```

### 3. A/B Test Headlines
Generate multiple versions and pick the best:
```bash
npm run generate:guide "Nail Technicians" > version1.json
npm run generate:guide "Nail Technicians" > version2.json
# Compare and use the better one
```

### 4. Repurpose Content
Each guide can become:
- 📱 Twitter thread (7 tips = 7 tweets)
- 💼 LinkedIn carousel post
- 📧 Email newsletter series
- 🎥 YouTube video script
- 📝 Medium article

### 5. Track SEO Performance
Use Google Search Console to see which guides rank:
```bash
# High performers = generate similar content
# Low performers = refine and regenerate
```

---

## 📊 Expected Results

### Month 1
- 6 guides published
- 500-1,000 monthly visitors
- 5-10 signups from content

### Month 3
- 18 guides published
- 3,000-5,000 monthly visitors
- 30-50 signups from content

### Month 6
- 30+ guides published
- 10,000-15,000 monthly visitors
- 100-150 signups from content

**ROI:** Each guide costs ~$2 in API fees and generates $500-2,000 in customer lifetime value. 🚀

---

## 🎬 Next Steps

1. **Run first test**: `npm run generate:guide "Your Industry"`
2. **Review content**: Check quality, edit if needed
3. **Set up automation**: GitHub Actions OR Webhook
4. **Let it run**: Weekly auto-generation
5. **Monitor & optimize**: Track what ranks, double down

---

## 📚 Full Documentation

- **CONTENT_AUTOMATION_SETUP.md** - Detailed automation guide
- **WEBHOOK_INTEGRATION.md** - API integration examples
- **scripts/content-api.md** - Technical architecture

---

**Questions?** Check the docs above or DM me!

Now go generate some content! 🚀✨
