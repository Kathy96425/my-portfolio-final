import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function findLink() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find the original article link for '台上一分钟 台下十年功——湛江籍国家一级演员、著名粤剧文武生黄伟坤' published in 湛江晚报 on 2021-11-07. The link should be from gdzjdaily.com.cn if possible.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

findLink();
