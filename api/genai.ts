import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GEMINI || process.env.GENAI_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server misconfigured: GEMINI_API_KEY missing" });
    return;
  }

  const { prompt, skillsContext, projectsContext } = req.body || {};
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "Missing prompt" });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are a professional AI twin of Elisha Arba. Use the provided context to answer briefly and helpfully.\nSKILLS:\n${skillsContext || ""}\nPROJECTS:\n${projectsContext || ""}`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
      },
    });

    const text = response?.text || response?.output || "";
    res.status(200).json({ text });
  } catch (err: any) {
    console.error("GenAI server error:", err);
    const status = err?.response?.status || 500;
    res.status(status).json({ error: err?.message || String(err) });
  }
}
