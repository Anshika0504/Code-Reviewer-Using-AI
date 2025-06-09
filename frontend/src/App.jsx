import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import { useEffect, useState } from 'react'

function App() {
  const [code, setCode] = useState(`function sum() {\n  return 1 + 1;\n}`);
useEffect(()=>{
    prism.highlightAll();
  })

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
  fontSize:12,
  border:"1px solid #ddd",
  borderRadius:"5px",
  height:"100%",
  width:"100%"
}}
></Editor>
  <div className="review">Review</div>
</div>
      </div>
      <div className="right">
      
      </div>
     </main>
    </>
  )
}

export default App
