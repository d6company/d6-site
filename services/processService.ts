
import { GoogleGenAI, Type } from "@google/genai";

export interface ProcessAnalysis {
  potencial: 'alto' | 'medio' | 'baixo';
  horas_economizadas: number;
  custo_anual: number;       // horas * 12 meses (custo de oportunidade visual)
  abordagem: string;
  prazo_semanas: number;
  insight: string;
}

export const analyzeProcess = async (description: string): Promise<ProcessAnalysis> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
Você é um especialista sênior em automação de processos da D6 Technology, empresa brasileira que desenvolve sistemas, SaaS e automações.

O usuário descreveu o seguinte processo manual:
"${description}"

Analise este processo e retorne um diagnóstico técnico preciso. Seja específico, use números reais e razoáveis.
Estime as horas gastas mensalmente com este processo (se não informado, estime conservadoramente).
Calcule quantas horas mensais seriam economizadas com automação total ou parcial.
Sugira a abordagem técnica que a D6 usaria (seja direto, mencione tecnologias reais quando pertinente).
Estime o prazo em semanas para construir a solução.
Dê um insight impactante sobre o real custo deste processo ao longo do tempo.

Responda APENAS com JSON válido, sem texto adicional.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          potencial: { type: Type.STRING },
          horas_economizadas: { type: Type.NUMBER },
          custo_anual: { type: Type.NUMBER },
          abordagem: { type: Type.STRING },
          prazo_semanas: { type: Type.NUMBER },
          insight: { type: Type.STRING },
        },
        required: ["potencial", "horas_economizadas", "custo_anual", "abordagem", "prazo_semanas", "insight"],
      },
    },
  });

  const jsonStr = response.text?.trim() || "{}";
  return JSON.parse(jsonStr) as ProcessAnalysis;
};
