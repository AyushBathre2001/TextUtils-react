import React from 'react'

export default function About(props) {
  return (
    
    <div className= {`about ${props.mode}`} style  = {{background:props.mode === 'light'? '#fff': 'rgb(32 31 46)', color:props.mode === 'light'? 'black':'white'}}>
        <p className= {props.mode} style = {{color:props.mode === 'light'? 'rgb(77,77,77)':'white'}}>TextUtils is a website which can be used to format text in the way you want.</p>
    </div>
  )
}
