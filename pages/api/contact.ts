import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, interest, timeline, notes } = req.body ?? {};

  if (!name || !email || !company || !interest) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const hubspotKey = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (hubspotKey) {
    try {
      const hubspotRes = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${hubspotKey}`,
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: name,
            company,
            lifecyclestage: 'marketingqualifiedlead',
            recent_interest: interest,
            project_timeline: timeline ?? '',
            notes,
          },
        }),
      });

      if (!hubspotRes.ok) {
        const errorText = await hubspotRes.text();
        console.error('HubSpot submission failed', hubspotRes.status, errorText);
        return res.status(500).json({ error: 'Failed to submit contact to HubSpot' });
      }
    } catch (error) {
      console.error('HubSpot submission failed', error);
      return res.status(500).json({ error: 'Failed to submit contact to HubSpot' });
    }
  }

  if (process.env.CONVERTKIT_FORM_ID && process.env.CONVERTKIT_API_KEY) {
    try {
      const convertKitRes = await fetch(`https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: process.env.CONVERTKIT_API_KEY,
          email,
          first_name: name,
          fields: {
            company,
            interest,
          },
        }),
      });

      if (!convertKitRes.ok) {
        const errorText = await convertKitRes.text();
        console.error('ConvertKit submission failed', convertKitRes.status, errorText);
        return res.status(500).json({ error: 'Failed to subscribe contact to ConvertKit' });
      }
    } catch (error) {
      console.error('ConvertKit submission failed', error);
      return res.status(500).json({ error: 'Failed to subscribe contact to ConvertKit' });
    }
  }

  return res.status(200).json({ ok: true });
}
