import React from 'react'

export default function Alert(props) {
    return (
        props.alt && <div className={`alert ${props.alt.type}`}>
            <h3>{props.alt.type}</h3>: <p id='fade'>{props.alt.msg}</p>
        </div>
    )
}
