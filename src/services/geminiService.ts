
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const generateResponse = async (userPrompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    // Graceful fallback for demo purposes if no key is present
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Since this is a demo without a backend API key, I can't generate a live response. However, I am designed to answer questions about Lai Huiyi's experience, skills, and portfolio projects using the Gemini 3 Flash model.");
        }, 1000);
    });
  }

  try {
    // DO: Always use a named parameter for apiKey and create instance before request
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // DO: Use 'gemini-3-flash-preview' for basic text tasks
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    // DO: Use .text property directly to extract string output
    return response.text || "Sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
