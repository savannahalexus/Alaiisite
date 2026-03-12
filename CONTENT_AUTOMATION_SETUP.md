# 🤖 Content Automation Setup Guide

Connect Claude to automatically generate and update your alaii resources & blog content.

## 🎯 What This Does

- **Generates new SEO-optimized guides** for different industries
- **Updates existing content** when needed
- **Creates Pull Requests** for human review before publishing
- **Runs on schedule** (weekly) or on-demand
- **Fully automated** end-to-end

## 📋 Setup Steps

### 1. Get Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account or sign in
3. Navigate to API Keys
4. Create a new API key
5. Copy the key (starts with `sk-ant-...`)

### 2. Add API Key to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `ANTHROPIC_API_KEY`
5. Value: Paste your Claude API key
6. Click **Add secret**

### 3. Install Dependencies

```bash
npm install @anthropic-ai/sdk
```

### 4. Test Locally (Optional)

Generate a single guide locally to test:

```bash
export ANTHROPIC_API_KEY="sk-ant-your-key-here"
node scripts/auto-update-content.js --industry "Nail Technicians"
```

Review the generated content in:
- `src/app/pages/GuidePage.tsx` (new guide added)
- `src/app/pages/ResourcesPage.tsx` (new card added)
- `public/sitemap.xml` (new URL added)

### 5. Enable GitHub Action

The workflow is already set up in `.github/workflows/auto-content-update.yml`

**It will:**
- Run every Monday at 9am UTC
- Generate one new guide from the queue
- Create a Pull Request for review
- Wait for your approval before publishing

### 6. Manual Trigger

To generate content on-demand:

1. Go to your GitHub repo → **Actions** tab
2. Select **Auto-Generate Content with Claude**
3. Click **Run workflow**
4. (Optional) Enter a specific industry, or leave blank for batch mode
5. Click **Run workflow**

Within minutes, you'll have a new PR with generated content!

## 🎨 Customization

### Add Industries to Queue

Edit `scripts/auto-update-content.js` and modify the `INDUSTRY_QUEUE`:

```javascript
const INDUSTRY_QUEUE = [
  'Nail Technicians',
  'Lash Artists',
  'Your New Industry Here',  // Add here
];
```

### Adjust Content Prompts

Edit the `generateGuideContent()` function in `scripts/auto-update-content.js` to customize:
- Tone of voice
- Content structure
- SEO requirements
- alaii mention frequency

### Change Schedule

Edit `.github/workflows/auto-content-update.yml`:

```yaml
schedule:
  - cron: '0 9 * * 1'  # Change this
  # Format: minute hour day month dayOfWeek
  # '0 9 * * 1' = 9am UTC every Monday
  # '0 0 * * *' = Midnight every day
```

## 📊 Content Review Workflow

1. **Automation runs** (weekly or manual trigger)
2. **Claude generates content** following your templates
3. **GitHub creates PR** with all changes
4. **You review** the generated content
5. **You approve & merge** (or request changes)
6. **Auto-deploys** to production

## 🔒 Security Best Practices

✅ **API key is secret** - stored in GitHub Secrets, never in code
✅ **Human review required** - creates PRs, doesn't auto-merge
✅ **Rate limiting** - 5 second delay between batch requests
✅ **Error handling** - if one fails, continues with next

## 🚀 Usage Examples

### Generate Single Guide
```bash
# Local
ANTHROPIC_API_KEY=sk-xxx node scripts/auto-update-content.js --industry "Chiropractors"

# Via GitHub Actions UI
Actions → Auto-Generate Content → Run workflow → Enter "Chiropractors"
```

### Batch Generate All Queued Guides
```bash
# Local (generates all 10+ guides in queue)
ANTHROPIC_API_KEY=sk-xxx node scripts/auto-update-content.js --batch

# Via GitHub Actions UI
Actions → Auto-Generate Content → Run workflow → Leave industry blank
```

### Update Existing Guide
Modify the script to accept an `--update` flag:

```bash
node scripts/auto-update-content.js --update "barber-200k-year-guide" --refresh-section "tips"
```

## 📈 Scaling Up

### Weekly Content Calendar

Week 1: Nail Technicians
Week 2: Lash Artists  
Week 3: Chiropractors
Week 4: Physical Therapists
... (automated via queue)

### Multi-Language Support

Modify the prompt to generate in different languages:

```javascript
const prompt = `Generate this guide in Spanish for the Latin American market...`;
```

### Content Types

Extend beyond guides:
- **Case studies**: "How [Name] Built $200k Business"
- **Comparison posts**: "[Industry] Software: alaii vs Competitors"
- **Tips & tricks**: "10 [Industry] Marketing Tips"

## 🛠️ Troubleshooting

### PR not created?
- Check GitHub Actions tab for error logs
- Verify ANTHROPIC_API_KEY secret is set
- Ensure you have write permissions on repo

### Content quality issues?
- Refine the prompt in `generateGuideContent()`
- Adjust temperature (0.7 = creative, 0.3 = consistent)
- Add more examples in the prompt

### Rate limits?
- Add longer delays in batch mode
- Use Claude Opus for higher limits
- Split into multiple workflow runs

## 💡 Pro Tips

1. **Review first 3-5 generated guides carefully** to refine prompts
2. **Keep a brand voice doc** that Claude can reference
3. **A/B test different prompt styles** to see what ranks better
4. **Track which guides drive most conversions** and generate similar content
5. **Repurpose guides** into Twitter threads, LinkedIn posts, etc.

## 📞 Support

If you need help:
1. Check the error logs in GitHub Actions
2. Review Claude's response in the PR description
3. Adjust prompts based on output quality
4. DM me or create an issue in the repo

---

**You're now set up for infinite SEO content! 🚀**

Every week, Claude will generate a new high-quality guide, you review it, approve it, and it goes live—bringing in organic traffic on autopilot.
