import React from 'react'

export default function Contact(props) {
  return (
    <div className= {`contact ${props.mode}`} style  = {{background:props.mode === 'light'? '#fff': 'rgb(32 31 46)', color:props.mode === 'light'? 'black':'white'}}>
        <p className= {props.mode} style = {{color:props.mode === 'light'? 'rgb(77,77,77)':'white'}}>Email - ayushtherock2001@gmail.com</p>
    </div>
  )
}
