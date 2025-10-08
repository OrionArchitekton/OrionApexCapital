import { logger } from '@/lib/logger';
import { isRateLimited } from '@/lib/rateLimit';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    logger.warn('Rate limited contact', { ip });
    return res.status(429).json({ ok:false, error:'Too many requests' });
  }

  try {
  const { name, email, message, company, interest } = req.body || {};
    const invalid = [];
    if (!name || name.length < 2 || name.length > 120) invalid.push('name');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRe.test(email) || email.length > 200) invalid.push('email');
    if (!message || message.length < 10 || message.length > 5000) invalid.push('message');
    if (invalid.length) return res.status(400).json({ ok:false, error:'Invalid fields', fields: invalid });

    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "contact@orionapexcapital.com",
        to: process.env.CONTACT_TO_EMAIL,
        subject: `New Contact — ${name}`,
        text: `From: ${name} <${email}>\nCompany: ${company || 'N/A'}\nFocus: ${interest || 'N/A'}\n\n${message}`
      });
      logger.info('Contact email sent', { ip, email });
    } else {
      logger.info('Contact logged (no email configured)', { ip, email });
      console.log("[contact]", { name, email, company, interest, message });
    }

    res.status(200).json({ ok: true });
  } catch (e) {
    logger.error('Contact handler error', { error: String(e) });
    res.status(500).json({ ok: false, error: "Internal error" });
  }
}
