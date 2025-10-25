import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { payload, objectType = 'contacts' } = req.body ?? {};

  if (!payload) {
    return res.status(400).json({ error: 'Payload required' });
  }

  const hubspotKey = process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if (!hubspotKey) {
    return res.status(200).json({ ok: true, message: 'No CRM token configured' });
  }

  try {
    await fetch(`https://api.hubapi.com/crm/v3/objects/${objectType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${hubspotKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('HubSpot CRM proxy failure', error);
  }

  return res.status(200).json({ ok: true });
}
