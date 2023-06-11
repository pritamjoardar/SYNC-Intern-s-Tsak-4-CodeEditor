import React, { useEffect, useState } from 'react'
import "./Front.scss"
const Front = () => {
    const [html,setHtml] =useState();
    const [css,setCss] =useState();
    const [js,setJs] =useState();
    const [code,setCode] =useState();
    
    const Code =`<html>
    <body>${html}</body>
   <style>${css}</style>
   <script>${js}</script>
    <html/>`

  useEffect(()=>{
  const timeout =  setTimeout(()=>{
      setCode(Code);
    },1000)
    return()=>clearTimeout(timeout);
  },[html,css,js])
  return (
    <>
    <div className='body'>
        <div className="nav"><h1 style={{fontSize:"3rem",color:"white"}}>Code Editor</h1></div>
    <div className="con">
        <div className="small_con"><h1><i style={{color:"red"}} class="fa-brands fa-html5"></i>HTML</h1><textarea style={{caretColor: "red"}} onChange={(e)=>{setHtml(e.target.value)}} name="" id="" cols="30" rows="10"></textarea></div>
        <div className="small_con"><h1><i style={{color:"skyBlue"}} class="fa-brands fa-css3"></i>CSS</h1><textarea style={{caretColor:"skyBlue"}} onChange={(e)=>{setCss(e.target.value)}} name="" id="" cols="30" rows="10"></textarea></div>
        <div className="small_con"><h1><i style={{color:"yellow"}} class="fa-brands fa-js"></i>JS</h1><textarea style={{caretColor: "yellow"}} onChange={(e)=>{setJs(e.target.value)}} name="" id="" cols="30" rows="10"></textarea></div>
    </div>
    <div className='output'>
        <iframe srcDoc={code} sandbox='allow-scripts'  title='output' frameborder="0"></iframe>
    </div>
    </div>
    </>
  )
}

export default Front
