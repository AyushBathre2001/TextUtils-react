import React from 'react'

export default function Navbar(props) {
    return (
        <>
        <div className= {`navbar ${props.mode}`} style = {{background:props.mode === 'light'? 'rgb(245 241 231)': '#404168', color:props.mode === 'light'? 'black':'white'}}>
            <div className="logo">
                <h2>Textutils.</h2>
            </div>
       
            <div className="darkmode">
                <label className="switch">
                    <input type="checkbox" onClick={props.theme} />
                        <span className="slider round"></span>
                </label>
            </div>
        </div>
        </>
    )
}
