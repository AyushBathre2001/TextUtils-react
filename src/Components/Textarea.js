import React, {useState} from 'react'

export default function Textarea(props){
    const[text,setText] = useState("")
    const[bold,setBold] = useState('normal')
    const[italic,setItalic] = useState('normal')
    const[underline,setUnderline] = useState('none')
  
    const onArea = (element)=>{
        setText(element.target.value)
    }

    const upperCase = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Text has been converted to uppercase","Success")
        if(text === ""){
          props.showAlert("Textarea is empty","Warning")
        }
    }
    const lowerCase = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Text has been converted to lowercase","Success")
        if(text === ""){
          props.showAlert("Textarea is empty","Warning")
        }
        
    }

    const boldText = ()=>{
      if(text === ""){
        props.showAlert("Textarea is empty","Warning")
      }
      else if(bold === 'normal'){
        setBold('bold')
        
      }
      else{
        setBold('normal')
      }
    }
    const italicText = ()=>{
      if(text === ""){
        props.showAlert("Textarea is empty","Warning")
      }
      else if(italic === 'normal'){
        setItalic('italic')

      }
      else{
        setItalic('normal')
      }
    }
    const underlineText = ()=>{
      if(text === ""){
        props.showAlert("Textarea is empty","Warning")
      }
      else if(underline === 'none'){
        setUnderline('underline')

      }
      else{
        setUnderline('none')
      }
    }

    const clearText = ()=>{
      setText("")
      props.showAlert("Text has been cleared","Success")
      if(text === ""){
        props.showAlert("Textarea is empty","Warning")
      }
    }   
    
  return (
    <div className={`container ${props.mode}`} style  = {{background:props.mode === 'light'? '#fff': 'rgb(32 31 46)', color:props.mode === 'light'? 'black':'white'}}>
        <h1 className={props.mode} style = {{color:props.mode === 'light'? 'rgb(77,77,77)':'white'}}>Enter the text to analyze below</h1>
      <textarea className={props.mode} cols="10" rows="10" value={text} style = {{fontStyle:italic, textDecoration:underline,fontWeight:bold, background:props.mode === 'light'? 'white': 'black', color:props.mode === 'light'? 'black':'white'}} onChange = {onArea}></textarea>
      <div className="buttons">
        <button className='butt' id='upper' onClick={upperCase}>Uppercase</button>
        <button className='butt' id='lower' onClick={lowerCase}>Lowercase</button>
        <button className='butt format' onClick={boldText}>B</button>
        <button className='butt format' onClick={italicText}>I</button>
        <button className='butt format' onClick={underlineText}>U</button>
        <button className='butt' id='clear' onClick={clearText}>Clear</button>
      </div>
      <div className="summary">
        <p>{text.split(' ').filter((element)=>{ return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{(text.split(' ').length - 1)*0.0038} minutes read</p>
      </div>
      <div className="preview">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

