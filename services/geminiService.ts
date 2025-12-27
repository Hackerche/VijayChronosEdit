
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiStory, Project } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectStory = async (project: Project): Promise<GeminiStory> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a short creative "Editor's Note" and a "Hook" for a video editing project. 
      Project Title: ${project.title}
      Client: ${project.client}
      Category: ${project.category}
      Description: ${project.description}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hook: { type: Type.STRING, description: "A punchy one-liner hook for the project." },
            editorNote: { type: Type.STRING, description: "A professional yet creative 2-sentence note about the editing style." }
          },
          required: ["hook", "editorNote"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      hook: project.title,
      editorNote: "Crafted with precision and a focus on visual rhythm."
    };
  }
};
