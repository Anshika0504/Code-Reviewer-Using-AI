import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`);
  const [review,setReview]=useState(``)

useEffect(()=>{
    prism.highlightAll();
  },[])

  async function reviewCode(){
  const response=await axios.post('http://localhost:3000/ai/get-review',{code})
  setReview(response.data)
  console.log(response.data)
  } 

  return (
    <>
     <main>
      <div className="left">
<div className="code">
<Editor 
value={code}
onValueChange={code=>setCode(code)}
highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
padding={10}
style={{
  fontFamily:'"Fira code","Fira Mono","monospace"',
  fontSize:16,
  border:"1px solid #ddd",
  borderRadius:"5px",
  height:"100%",
  width:"100%"
}}
></Editor>
  <div className="review" onClick={reviewCode} >
    Review</div>
</div>
      </div>
      <div className="right">
      <Markdown>{review}</Markdown>
      </div>
     </main>
    </>
  )
}

export default App
