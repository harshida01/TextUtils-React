import React,{useState} from 'react'

export default function TextFrom(props) {
    const [text,setText]=useState('Enter text here');

    const handleClick = ()=>{
        let utext=setText(text.toUpperCase());
        console.log("UpperCase when clicked",utext);
        props.showAlert("Converted to uppercase","Success");
    };
    const handleClick1 = ()=>{
        let ltext=setText(text.toLowerCase());
        console.log("LowerCase when clicked",ltext);
        props.showAlert("Converted to lowercase","Success");
    };
    const reverse1= ()=>{
    let revtxt=setText(text.split("").reverse().join(""));
    console.log("reverse when clicked",revtxt);
    props.showAlert("Reversed","Success")
    };
    const handleclearClick = ()=>{
      let cctext=setText("");
      console.log("Cleared when clicked",cctext);
      props.showAlert("ClearAll","Success")
    };
  const  removeES= ()=>{
    let remtxt=text.split(/[ ]+/);
    setText(remtxt.join(" "))
    console.log("remove extra spaces clicked",remtxt.join(" "));
    props.showAlert("Removed Extra Spaces","Success")
};


    const handleChange=(event)=>{
        setText(event.target.value)
    }
    const textColor = { color: props.mode === 'dark' ? 'white' : 'black' };


  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#859bc5' }}>
      <h1 style={textColor}>{props.heading}</h1>
        <div className="mb-3">
        <h2 style={textColor}>Write the text here</h2>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
              color: props.mode === 'dark' ? 'white' : '#859bc5'
            }}
            id="mybox"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to Uppercase

        </button>
        <button className="btn btn-primary mx-2" onClick={handleClick1}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>
          Clear the Text
        </button>
        <button className="btn btn-primary mx-2" onClick={reverse1}>
          Reverse the Text
        </button>
        <button className="btn btn-primary mx-2" onClick={removeES}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => element.length !== 0).length
          }{' '}
          words and {text.length} characters
        </p>
        <p>
          {
            0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length
          }{' '}
          Minutes read
        </p>
      </div>
    </>
  );
}