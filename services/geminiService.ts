
// Fix: Import GoogleGenAI as required by @google/genai guidelines.
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize with process.env.API_KEY directly, assuming it is valid and pre-configured.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHook = async (idea: string): Promise<string> => {
  if (!idea) return "Please provide an idea first.";
  
  try {
    // Fix: Use gemini-3-pro-preview for complex creative tasks and to align with the UI's description.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generate a highly engaging viral video hook for the following idea: "${idea}". 
      Format the response as a short, punchy hook followed by a brief reason why it works for retention. 
      Keep it high-end and professional.`,
      config: {
        // Fix: Avoid setting maxOutputTokens unless strictly necessary to prevent unexpected truncation.
        temperature: 0.8,
      },
    });

    // Fix: Access the .text property directly instead of calling it as a method.
    return response.text || "I'm thinking... but couldn't come up with a hook right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The strategist is offline. Try again later.";
  }
};