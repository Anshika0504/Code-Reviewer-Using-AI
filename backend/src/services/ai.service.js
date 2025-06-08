const { GoogleGenerativeAI } = require("@google/generative-ai"); 

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
     model: "gemini-1.5-flash",
     systemInstruction:`
     You are an code reviewer,who have an expertice in
     devlopment. You look for the code and find the problems and
     suggest the solutions to the developer.

     You always try to find the best solution for the developer and also try to make the code more efficent and clean
     `
     }); 
async function generateContent(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response.text();  
        return response;
    } catch (error) {
        console.error("Error generating content:", error);
        return "Something went wrong while generating content.";
    }
}
module.exports = generateContent;
