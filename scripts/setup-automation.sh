#!/bin/bash

# 🤖 alaii Content Automation Setup Script
# This script helps you set up automated content generation with Claude

set -e  # Exit on error

echo "
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🤖 alaii Content Automation Setup                      ║
║   Connect Claude to auto-generate SEO content            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org"
    exit 1
fi

echo -e "${GREEN}✅ Node.js detected: $(node --version)${NC}\n"

# Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install @anthropic-ai/sdk

echo -e "\n${GREEN}✅ Dependencies installed${NC}\n"

# Check for API key
echo -e "${YELLOW}🔑 API Key Setup${NC}"
if [ -z "$ANTHROPIC_API_KEY" ]; then
    echo "
You need a Claude API key from Anthropic.

1. Go to: https://console.anthropic.com
2. Sign in or create account
3. Navigate to API Keys
4. Create a new API key
5. Copy the key (starts with 'sk-ant-')

"
    read -p "Enter your Claude API key: " api_key
    export ANTHROPIC_API_KEY=$api_key
    
    echo ""
    read -p "Do you want to save this to your .env file? (y/n): " save_env
    if [ "$save_env" = "y" ]; then
        echo "ANTHROPIC_API_KEY=$api_key" >> .env
        echo -e "${GREEN}✅ Saved to .env file${NC}"
    fi
else
    echo -e "${GREEN}✅ API key found in environment${NC}"
fi

echo ""
echo -e "${YELLOW}🧪 Testing API Connection...${NC}"

# Test API connection
node -e "
const Anthropic = require('@anthropic-ai/sdk');
const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

(async () => {
  try {
    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 100,
      messages: [{
        role: 'user',
        content: 'Say hello in 5 words or less'
      }]
    });
    console.log('✅ API connection successful!');
    console.log('Claude says:', message.content[0].text);
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    process.exit(1);
  }
})();
"

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo "
📚 Next Steps:

1. Test Local Generation:
   ${YELLOW}node scripts/auto-update-content.js --industry \"Nail Technicians\"${NC}

2. Set up GitHub Secrets:
   - Go to: GitHub repo → Settings → Secrets → Actions
   - Add: ANTHROPIC_API_KEY = your-key

3. Enable GitHub Action:
   - Already configured in .github/workflows/auto-content-update.yml
   - Runs every Monday at 9am UTC
   - Or trigger manually from Actions tab

4. (Optional) Set up Webhook:
   - Add WEBHOOK_SECRET to Vercel environment
   - Deploy /api/webhook/generate-content.js
   - See WEBHOOK_INTEGRATION.md for details

📖 Documentation:
   - CONTENT_AUTOMATION_SETUP.md - Full automation guide
   - WEBHOOK_INTEGRATION.md - API integration guide
   - scripts/auto-update-content.js - Main script

🎯 Quick Test:
   Run this to generate your first guide:
   ${GREEN}node scripts/auto-update-content.js --industry \"Chiropractors\"${NC}

   Review the generated content, then:
   ${GREEN}git add .${NC}
   ${GREEN}git commit -m \"Add Chiropractors guide\"${NC}
   ${GREEN}git push${NC}

🚀 You're ready to automate content creation!
"
