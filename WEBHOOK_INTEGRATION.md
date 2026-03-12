# 🔗 Webhook Integration for Content Automation

Trigger content generation from **anywhere** - Zapier, Make, n8n, your custom bot, or cron jobs.

## 🎯 Use Cases

- **Scheduled Generation**: Run content creation on your own schedule
- **Slack Bot**: Generate content via Slack commands
- **Discord Bot**: "/generate-guide Nail Technicians"
- **Zapier Automation**: "Every Monday, generate guide for industry in Google Sheet"
- **Custom Dashboard**: Build your own content admin panel
- **ClawdBot Integration**: Connect your Claude bot to auto-publish

## 🚀 Quick Setup

### 1. Environment Variables

Add to Vercel (or your hosting platform):

```env
# Required
WEBHOOK_SECRET=your-super-secret-webhook-key-here
GITHUB_TOKEN=ghp_your_github_personal_access_token
ANTHROPIC_API_KEY=sk-ant-your-claude-api-key

# Optional (auto-detected from repo)
GITHUB_OWNER=your-github-username
GITHUB_REPO=alaii-landing
```

### 2. Create GitHub Personal Access Token

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **Generate new token (classic)**
3. Name: `alaii-content-automation`
4. Scopes: Check `repo` (full control) and `workflow`
5. Click **Generate token**
6. Copy the token (starts with `ghp_`)
7. Add to Vercel environment variables as `GITHUB_TOKEN`

### 3. Deploy to Vercel

The `/api/webhook/generate-content.js` file will auto-deploy as a serverless function.

Your webhook URL will be:
```
https://alaii.app/api/webhook/generate-content
```

## 📡 API Usage

### Basic Request

```bash
curl -X POST https://alaii.app/api/webhook/generate-content \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Secret: your-secret-key" \
  -d '{
    "industry": "Nail Technicians",
    "action": "create"
  }'
```

### Response

```json
{
  "success": true,
  "message": "Content generation triggered for: Nail Technicians",
  "industry": "Nail Technicians",
  "action": "create",
  "workflowStatus": "dispatched",
  "checkStatus": "https://github.com/you/repo/actions"
}
```

## 🔌 Integration Examples

### Zapier

**Trigger:** Schedule (Every Monday 9am)  
**Action:** Webhooks by Zapier → POST

**Setup:**
1. URL: `https://alaii.app/api/webhook/generate-content`
2. Method: POST
3. Headers:
   - `Content-Type`: `application/json`
   - `X-Webhook-Secret`: `your-secret-key`
4. Body:
```json
{
  "industry": "{{your_google_sheet_cell}}",
  "action": "create"
}
```

### Make (Integromat)

**Scenario:**
1. **Trigger:** Schedule (Every Monday)
2. **Google Sheets:** Get row from "Content Queue" sheet
3. **HTTP:** Make a request
   - URL: `https://alaii.app/api/webhook/generate-content`
   - Method: POST
   - Headers: `X-Webhook-Secret: your-key`
   - Body: `{ "industry": "{{industry}}" }`
4. **Google Sheets:** Mark row as "Generated"

### n8n Workflow

```json
{
  "nodes": [
    {
      "name": "Schedule",
      "type": "n8n-nodes-base.cron",
      "position": [250, 300],
      "parameters": {
        "triggerTimes": {
          "item": [
            {
              "hour": 9,
              "weekday": 1
            }
          ]
        }
      }
    },
    {
      "name": "Get Industry from Airtable",
      "type": "n8n-nodes-base.airtable",
      "position": [450, 300]
    },
    {
      "name": "Trigger Content Generation",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 300],
      "parameters": {
        "url": "https://alaii.app/api/webhook/generate-content",
        "method": "POST",
        "headerParameters": {
          "parameter": [
            {
              "name": "X-Webhook-Secret",
              "value": "={{$env.WEBHOOK_SECRET}}"
            }
          ]
        },
        "bodyParameters": {
          "parameter": [
            {
              "name": "industry",
              "value": "={{$node['Get Industry from Airtable'].json['Industry']}}"
            }
          ]
        }
      }
    }
  ]
}
```

### Slack Bot

Use Slack's slash commands:

```
/generate-guide Nail Technicians
```

**Slack App Setup:**
1. Create Slack App → Slash Commands
2. Command: `/generate-guide`
3. Request URL: `https://alaii.app/api/webhook/generate-content`
4. Add `X-Webhook-Secret` header via middleware

**Slack responds:**
> ✅ Content generation started for Nail Technicians! Check GitHub Actions for progress.

### Discord Bot

```python
import discord
import requests

@bot.command()
async def generate(ctx, *, industry):
    response = requests.post(
        'https://alaii.app/api/webhook/generate-content',
        headers={
            'X-Webhook-Secret': 'your-secret-key',
            'Content-Type': 'application/json'
        },
        json={'industry': industry}
    )
    
    if response.ok:
        await ctx.send(f'✅ Generating guide for {industry}...')
    else:
        await ctx.send('❌ Failed to generate content')
```

### ClawdBot Integration

If you're building a custom Claude bot:

```javascript
// Your bot receives: "Generate a guide for Chiropractors"

async function handleGenerateCommand(industry) {
  // Call your webhook
  const response = await fetch('https://alaii.app/api/webhook/generate-content', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Webhook-Secret': process.env.WEBHOOK_SECRET
    },
    body: JSON.stringify({ industry })
  });
  
  if (response.ok) {
    return `✅ Content generation started for ${industry}. Check GitHub in 5-10 minutes for PR.`;
  } else {
    return `❌ Failed to trigger generation: ${response.statusText}`;
  }
}
```

## 🎛️ Advanced Features

### Batch Generation via Webhook

```bash
curl -X POST https://alaii.app/api/webhook/generate-content \
  -H "X-Webhook-Secret: your-secret" \
  -d '{
    "industries": [
      "Nail Technicians",
      "Lash Artists", 
      "Chiropractors"
    ],
    "action": "batch"
  }'
```

### Content Update (Not Just Create)

```bash
curl -X POST https://alaii.app/api/webhook/generate-content \
  -H "X-Webhook-Secret: your-secret" \
  -d '{
    "slug": "barber-200k-year-guide",
    "action": "update",
    "section": "tips"
  }'
```

### Custom Parameters

Pass custom data to influence generation:

```json
{
  "industry": "Nail Technicians",
  "action": "create",
  "params": {
    "tone": "professional",
    "target_revenue": 150000,
    "focus_area": "social_media_marketing"
  }
}
```

## 🔒 Security

### Webhook Secret Best Practices

1. **Use a strong random key**: 
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Rotate regularly**: Change secret every 90 days

3. **Never commit secrets**: Use environment variables only

4. **IP Whitelist** (optional): Add in middleware:
   ```javascript
   const allowedIPs = ['zapier-ip', 'your-bot-ip'];
   if (!allowedIPs.includes(req.ip)) {
     return res.status(403).json({ error: 'Forbidden' });
   }
   ```

### Rate Limiting

Add to prevent abuse:

```javascript
// Simple in-memory rate limit (use Redis for production)
const rateLimiter = new Map();

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 10;
  
  const requests = rateLimiter.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({ 
      error: 'Too many requests',
      retryAfter: windowMs 
    });
  }
  
  recentRequests.push(now);
  rateLimiter.set(ip, recentRequests);
  
  // Continue with normal handler...
}
```

## 📊 Monitoring

### Log All Requests

```javascript
console.log({
  timestamp: new Date().toISOString(),
  ip: req.headers['x-forwarded-for'],
  industry: req.body.industry,
  action: req.body.action,
  success: true
});
```

### Send Notifications

```javascript
// Notify on Slack when content generation starts
await fetch(process.env.SLACK_WEBHOOK_URL, {
  method: 'POST',
  body: JSON.stringify({
    text: `🤖 New content generation: ${industry}`
  })
});
```

## 🧪 Testing

### Test Webhook Locally

```bash
# Start local server
npm run dev

# In another terminal, trigger webhook
curl -X POST http://localhost:3000/api/webhook/generate-content \
  -H "X-Webhook-Secret: test-secret" \
  -d '{"industry": "Test Industry"}'
```

### Test with Postman

1. Import this collection:

```json
{
  "info": { "name": "alaii Content Webhook" },
  "item": [
    {
      "name": "Generate Content",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "X-Webhook-Secret",
            "value": "{{webhook_secret}}"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"industry\": \"Nail Technicians\"\n}"
        },
        "url": "https://alaii.app/api/webhook/generate-content"
      }
    }
  ]
}
```

## 🎯 Next Steps

1. **Set up your first automation** (Zapier is easiest)
2. **Test with one industry** to verify the flow
3. **Create a content calendar** in Google Sheets/Airtable
4. **Let it run weekly** and review PRs
5. **Scale up** as you see success

---

**You now have an API-first content engine! 🚀**

Any tool that can make HTTP requests can now trigger your content creation automatically.
