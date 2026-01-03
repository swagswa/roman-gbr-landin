
// Fix: Import GoogleGenAI as required by @google/genai guidelines.
import { GoogleGenAI } from "@google/genai";

// Lazy initialization to avoid crashing the app if the API key is missing
let aiInstance: GoogleGenAI | null = null;

const getAI = () => {
  if (aiInstance) return aiInstance;
  
  // Use import.meta.env for Vite environment variables
  const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is not set. AI strategist will be offline.");
    return null;
  }

  try {
    aiInstance = new GoogleGenAI(apiKey);
    return aiInstance;
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    return null;
  }
};

export const generateHook = async (idea: string): Promise<string> => {
  if (!idea) return "Please provide an idea first.";
  
  const ai = getAI();
  if (!ai) return "The strategist is offline (API key missing). Try again later.";
  
  try {
    // Use gemini-1.5-flash or gemini-1.5-pro as they are more stable names
    const model = (ai as any).getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Generate a highly engaging viral video hook for the following idea: "${idea}". 
      Format the response as a short, punchy hook followed by a brief reason why it works for retention. 
      Keep it high-end and professional.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || "I'm thinking... but couldn't come up with a hook right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The strategist is offline. Try again later.";
  }
};