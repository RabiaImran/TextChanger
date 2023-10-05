import React, {useState} from 'react'


export default function TextForm(props) {
    const upConverter= () =>{
      console.log("UpperCase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }

    const lowConverter= () =>{
      console.log("UpperCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }

    const convChange= (event) =>{
      console.log("Texter Cahnge");
      setText(event.target.value);
    }
    const clear= () =>{
      
      let newText = " ";
      setText(newText)
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={convChange} id="myBox" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={upConverter}>Convert to UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={lowConverter}>Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
    </div>
    <div className='container my-3'>
      <h2>Text Summary</h2>
      <p> {text.split(" ").length} words & {text.length} characters</p>
      <h2>Preview</h2>
      <p>{ text }</p>
    </div>
    </>
    
  )
}
