require('dotenv').config()
const app=require('./src/app')

app.listen(3000,(req,resp)=>{
    console.log("server is running at port 3000")
})