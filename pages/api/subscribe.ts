import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, tag } = req.body ?? {};

  if (!email) {
    return res.status(400).json({ error: 'Email required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
    try {
      const convertKitRes = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
          fields: { tag },
        }),
      });

      if (!convertKitRes.ok) {
        const errorText = await convertKitRes.text();
        console.error('ConvertKit subscribe failed', convertKitRes.status, errorText);
        return res.status(500).json({ error: 'Failed to subscribe email to ConvertKit' });
      }
    } catch (error) {
      console.error('ConvertKit subscribe failed', error);
      return res.status(500).json({ error: 'Failed to subscribe email to ConvertKit' });
    }
  }

  return res.status(200).json({ ok: true });
}
