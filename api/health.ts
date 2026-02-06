export default function handler(req: any, res: any) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Report only presence of environment variables — do NOT return secrets
  const hasGemini = Boolean(
    process.env.GEMINI_API_KEY || process.env.GENAI_KEY || process.env.GEMINI,
  );
  const hasEmailJsService = Boolean(process.env.VITE_EMAILJS_SERVICE_ID);
  const hasEmailJsTemplate = Boolean(process.env.VITE_EMAILJS_TEMPLATE_ID);
  const hasEmailJsPublic = Boolean(process.env.VITE_EMAILJS_PUBLIC_KEY);

  res.status(200).json({
    ok: true,
    env: {
      gemini: hasGemini,
      emailjs: {
        service: hasEmailJsService,
        template: hasEmailJsTemplate,
        publicKey: hasEmailJsPublic,
      },
    },
  });
}
