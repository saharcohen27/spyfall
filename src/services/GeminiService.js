const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const EN_PROMT = process.env.REACT_APP_GEMINI_PROMT_EN;
const HE_PROMT = process.env.REACT_APP_GEMINI_PROMT_HE;

const getPlace = async (lang) => {
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = lang === "en" ? EN_PROMT : HE_PROMT;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error(
      "Error making request to OpenAI API:",
      error.response ? error.response.data : error.message
    );
  }
};

export default getPlace;
