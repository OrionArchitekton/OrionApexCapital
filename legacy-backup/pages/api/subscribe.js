export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { email } = req.body || {};
  // In production, integrate with Brevo/Mailchimp/etc. For now, log only.
  console.log("[SUBSCRIBE]", email);
  return res.json({ message: "You're on the list. Check your inbox soon." });
}