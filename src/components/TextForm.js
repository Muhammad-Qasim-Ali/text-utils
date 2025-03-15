// rfc hit enter its react functional component 

import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("converted to uppercase!", "success")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("converted to lowercase!", "success")
    }
    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speak text!", "success")
    }
    const handleCopy = () => {
    //     var text = document.getElementById("myBox")
    //     text.select()
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()   // remove selection of text after copy
        props.showAlert("copy text!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("remove extra spaces!", "success")
    }
    
    const handleClearClick = ()=>{
        let newText = ('')
        setText(newText)
        props.showAlert("clear text!", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            {/* here we will render a form from bootstrap copy paste */}
            <div className="mb-3">
                <h1 className='mb-4'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
            <button disabled={text.length===0} type="submit" onClick={handleSpeakClick} className="btn btn-primary mx-1 my-1">Speak</button>
            <button disabled={text.length===0} type="submit" onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
            <button disabled={text.length===0} type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
