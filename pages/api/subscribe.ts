import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, tag } = req.body ?? {};

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    try {
      await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
          fields: { tag },
        }),
      });
    } catch (error) {
      console.error('ConvertKit subscribe failed', error);
    }
  }

  return res.status(200).json({ ok: true });
}
