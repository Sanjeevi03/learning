import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyACn6ghuhRQMSjoQElzXhpjsraLiHcbHuw" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "what is react.js?",
  });
  console.log(response.text);
}

main();