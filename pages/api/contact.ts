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
      await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
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
    } catch (error) {
      console.error('HubSpot submission failed', error);
    }
  }

  if (process.env.CONVERTKIT_FORM_ID && process.env.CONVERTKIT_API_KEY) {
    try {
      const formId = process.env.CONVERTKIT_FORM_ID;
      await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
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
    } catch (error) {
      console.error('ConvertKit submission failed', error);
    }
  }

  return res.status(200).json({ ok: true });
}
