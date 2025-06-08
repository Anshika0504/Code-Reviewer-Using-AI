const aiService=require("../services/ai.service")
module.exports.getReview=async (req,resp)=>{
    const code=req.body.code;
    if(!code){
        return resp.status(400).send("Prompt is required");
    }
    const response= await aiService(code);
    resp.send(response);
}