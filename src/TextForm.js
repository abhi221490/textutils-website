import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked");
        let name = text.toUpperCase();
        setText(name);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleLoClick = () =>{
        let name = text.toLowerCase();
        setText(name);
        props.showAlert("Converted to Lowercase","success");
    }

    const resetwords = () =>{
        setText('');
        props.showAlert("Erased","success");
    }

    const handleCopy = () =>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Words have been copied","success");
  }


    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
<div className="mb-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-2"  onClick={handleLoClick}>Convert to UpperCase</button>
 <button className="btn btn-primary mx-2"  onClick={resetwords}>Clear Text</button>
 <button className="btn btn-primary mx-2"  onClick={handleCopy}>Copy to Clipboard</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
       <h3>Your text Summary</h3>
       <h4>{text.split(' ').length} words and {text.length} characters</h4>
    </div>
    </>
  )
}
