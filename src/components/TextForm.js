import React, {useState} from 'react'
export default function TextForm(props) {
  // function countwords(){
  //   let word_length=text.split(" ").length
  //   if(word_length === 1){
  //     if(text.length>0)
  //     word_length = 1;
  
  //     else
  //     word_length = 0;
  //   }
  
  //   else {
  //     word_length=text.trim("").split(" ").length;
  //   }
  
  //   return word_length;
  // }
  const handleUpClick = () =>
  {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleOnChange = (event) =>
  {
    // console.log("OnChange was clicked");
    setText(event.target.value);
  }

  const handleLowClick = () =>
  {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleClearClick = () =>
  {
    let newText = ('');
    setText(newText);
    props.showAlert("cleared text", "success");
  }
  const handleCopy = () =>
  {
    // var text = document.getElementById('mybox');
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  }
  const handleExtraSpaces = () =>
  {
let newtext = text.split(/[ ]+/);
setText(newtext.join(" "));
props.showAlert("removed spaces", "success");
  }

  const [text, setText] = useState('Enter Text Here');
   //text will stroe the value and we can update it by setText
  return (
    <>

    <div className='container' style={{ color : ((props.mode==='light'?'black':'white')) }} >
    <h1 >{props.heading} </h1>
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor : props.mode === 'light' ? 'white' : '#c3b5b5', color : props.mode==='light'?'black':'white' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleLowClick}>Convert to lowercase</button>
<button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text </button>
<button disabled={text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces </button>
    </div>
    <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white'}}>
      <h1 className="my-3">Your Text Summary</h1>
      <p> <strong id="strng">
        {/* {countwords()} */}
       { text.split(/\s+/).filter((element) => {return element.length !== 0}).length}
         </strong> words and {text.length} characters
      </p>
      <p> {0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length}  minutes to read your Text</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
 
   
   
    </>
   
  )
}
