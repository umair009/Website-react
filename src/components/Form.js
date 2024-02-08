import React, { useState } from 'react';

function Form(props) {
    //change background color when click on button with function
    const [textAreabgColor, settextAreabgColor] = useState({
        color: "black",
        backgroundColor: "#d7d7d7"
    });
    function changeVlaue() {
        if (textAreabgColor.backgroundColor === "#d7d7d7") {
            settextAreabgColor({
                color: "black",
                backgroundColor: "#a5f7ff"
            });
        } else {
            settextAreabgColor({
                color: "black",
                backgroundColor: "#d7d7d7"
            });
        }
    };

    const [dismissalText, setDismissalText] = useState("")
    //change text to uppercase when click on button with function
    const [textValue, settextValue] = useState("");
    function changeUpperCase() {
        let newText = textValue.toUpperCase();
        settextValue(newText);
        setDismissalText("Your text Convert to UpperCase");
        setTimeout(() => {
            setDismissalText("");
        }, 2000);
    }

    // onchange event fuciton
    function changeText(event) {
        settextValue(event.target.value);
    }

    //clear all text when click on button function
    function clearText() {
        settextValue("");
    }

    //copy all text when click on button function
    function copyText() {
        navigator.clipboard.writeText(textValue);
    }

    return (
        <>
            {/* {dismissalText !== "" ? <p style={{ backgroundColor: "gray", color: "white", padding: "10px" }}>{dismissalText}</p> : null}  */}
            {dismissalText !== "" && <p style={{ backgroundColor: "gray", color: "white", padding: "10px" }}>{dismissalText}</p>}
            <div className='container'>
                <h1 style={props.aboutHeadingColor}>Enter Text to analyze</h1>
                <textarea className="form-control" style={textAreabgColor} value={textValue} onChange={changeText} rows="8" ></textarea>
                <button disabled={textValue.length === 0} className='btn btn-secondary mt-4 me-3' onClick={changeVlaue}>Change background Color</button>
                <button disabled={textValue.length === 0} className='btn btn-primary mt-4 me-3' onClick={changeUpperCase}>Convert to UpperCase</button>
                <button disabled={textValue.length === 0} className='btn btn-danger mt-4 me-3' onClick={clearText}>Clear Text</button>
                <button disabled={textValue.length === 0} className='btn btn-danger mt-4 me-3' onClick={copyText}>Copy Text</button>
                <div className='container'>
                    <h1 className='mt-3' style={props.aboutHeadingColor}>Your Text Summary</h1>
                    <p style={props.aboutHeadingColor}>You have {textValue.length} character, {textValue.split(" ").filter((element) => { return element.length !== 0 }).length} words, {textValue.split(".").length} Sentences.  </p>
                    <h3 style={props.aboutHeadingColor}>Preview of above text</h3>
                    <p style={props.aboutHeadingColor}>{textValue.length > 0 ? textValue : "Nothing to Preview"}</p>
                </div>
            </div>
        </>
    )
}
export default Form;