import React, { useState } from 'react';


const TextForm = (props) => {

    const convertString = () => {
        let s = '';
        let i = 0;
        while (i < text.length) {
            let n = text.charAt(i);
            if (n === n.toUpperCase()) {
                n = n.toLowerCase();
            }
            else {
                n = n.toUpperCase();
            }

            i += 1;
            s += n;

        }
        setText(s);
        props.showAlert(" Text is inversed/toggled","success")

    }

    const wordCount = () => {
        let count = text.split(" ").length;
        if (text === '') {
            count = 0;
        }
        let ll=text.charAt(text.length-1);
        if(ll===" "){
            count=count-1;
        }
        return count;

    }
    function capitalizeFirstLetter() {
        let i = 1;
        let s = '';
        s += text.charAt(0).toUpperCase();
        while (i < text.length) {
            let n = text.charAt(i);

            if (text.charAt(i - 1) === '.') {
                n = n.toUpperCase();
            }
            i += 1;
            s += n;

        }
        setText(s);
        props.showAlert(" First letter has been capitalized.","success");
    }
    function capitalizeWord() {
        let i = 1;
        let s = '';
        s += text.charAt(0).toUpperCase();
        while (i < text.length) {
            let n = text.charAt(i);

            if (text.charAt(i - 1) === ' ') {
                n = n.toUpperCase();
            }
            i += 1;
            s += n;

        }
        setText(s);
        props.showAlert(" All the first letters has been capitalized.","success");
    }
    const handleCopy = () => {

        let tt = document.getElementById("myBox");
        tt.select();
        navigator.clipboard.writeText(tt.value);
        props.showAlert(" Text is copied.","success");


    }
    const ExtraSpaces = () => {
        let tt = text.split(/[ ]+/);
        setText(tt.join(" "));
        props.showAlert(" Extra spaces have been removed.","success");

    }
    const handleRemoveSpaces = () => {

        let newString = text.replace(/\s+/g, ''); // "thiscontainsspaces";     
        setText(newString);
        props.showAlert(" All spaces have been removed.","success");

    }
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newUpText = text.toUpperCase();
        setText(newUpText);
        props.showAlert(" Coverted to uppercase","success");
    }
    const handleLowClick = () => {
        // console.log("lowercase was clicked" + text);
        let newLowText = text.toLowerCase();
        setText(newLowText);
        props.showAlert(" Converted to lowercase","success");
    }
    const handleClrClick = () => {
        // console.log("lowercase was clicked" + text);
        let newClrText = "";
        setText(newClrText);
        props.showAlert(" Text is cleared","success");
    }
    const handleOnchange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

    // setText='set text'//correct way
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3 mt-3">
                    <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} cols="150" rows="10"></textarea>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary btn-sm mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary btn-sm mx" onClick={convertString}>Toggle Case</button>
                <button className="btn btn-primary btn-sm mx-3" onClick={capitalizeFirstLetter}>Captalize Each Sentence</button>
                <button className="btn btn-primary btn-sm mx" onClick={capitalizeWord}>Captalize Each Word</button>
                <button className="btn btn-primary btn-sm mx-3" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary btn-sm mx" onClick={handleClrClick}>Clear Slate</button>
                <button className="btn btn-primary btn-sm mx-3" onClick={handleRemoveSpaces}>Remove Spaces</button>
                <button className="btn btn-primary btn-sm mx-" onClick={ExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p className='my-3'><strong>{wordCount()}</strong>  words and <strong>{text.length}</strong> characters</p>
                <p><strong>{wordCount() * 0.008 + " minutes"}</strong> : Reading Time</p>
                <h2>Your Text Preview</h2>
                <p className='my-3'>{text.length>0?text:"Your text preview will appear here."}</p>

            </div>



        </>

    );






}



TextForm.defaultProps = {
    count: 0,
};
// #endregion

export default TextForm;
