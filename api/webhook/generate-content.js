/**
 * Webhook endpoint for triggering content generation
 * 
 * Deploy to Vercel and trigger from external tools like:
 * - Zapier
 * - Make (Integromat)
 * - n8n
 * - Your custom bot
 * 
 * Usage:
 *   POST /api/webhook/generate-content
 *   Headers: 
 *     X-Webhook-Secret: your-secret-key
 *   Body:
 *     { "industry": "Nail Technicians", "action": "create" }
 */

import { Octokit } from '@octokit/rest';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify webhook secret
  const webhookSecret = req.headers['x-webhook-secret'];
  if (webhookSecret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Unauthorized - Invalid webhook secret' });
  }

  const { industry, action = 'create' } = req.body;

  if (!industry) {
    return res.status(400).json({ 
      error: 'Missing required field: industry',
      example: { industry: 'Nail Technicians', action: 'create' }
    });
  }

  try {
    // Trigger GitHub Action workflow via API
    const octokit = new Octokit({ 
      auth: process.env.GITHUB_TOKEN 
    });

    const owner = process.env.GITHUB_OWNER || 'your-github-username';
    const repo = process.env.GITHUB_REPO || 'alaii-landing';

    const response = await octokit.actions.createWorkflowDispatch({
      owner,
      repo,
      workflow_id: 'auto-content-update.yml',
      ref: 'main',
      inputs: {
        industry: industry
      }
    });

    return res.status(200).json({
      success: true,
      message: `Content generation triggered for: ${industry}`,
      industry,
      action,
      workflowStatus: 'dispatched',
      checkStatus: `https://github.com/${owner}/${repo}/actions`
    });

  } catch (error) {
    console.error('Error triggering workflow:', error);
    
    return res.status(500).json({
      error: 'Failed to trigger content generation',
      message: error.message,
      industry
    });
  }
}

// Vercel config
export const config = {
  api: {
    bodyParser: true,
  },
};
