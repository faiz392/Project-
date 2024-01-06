import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    } 
    const handleLoclick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }    
    const handleonchange=(event)=>{
        setText(event.target.value)

    }
    const handleClearClick = () => {
        setText('');
    }
    
     
    const [text,setText]=useState('Enter text here');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}}onChange={handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something"}</p>
        </div>
        </>
    )
}
