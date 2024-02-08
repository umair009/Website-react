import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import About1 from './components/About1';
// import About from './components/About';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [toggleTextSet, settoggleTextSet] = useState("Enable Dark Mood");
  const [toggleColorSet, settoggleColorSet] = useState("dark");

  //about page heading, button, body styling
  const [headingColorSet, setheadingColorSet] = useState({
    color: "black"
  });

  const [myStyleBtnSet, setmyStyleBtnSet] = useState({
    color: "black"
  });

  const [myStyleBodySet, setmyStyleBodySet] = useState({
    color: "black"
  });

  //form page state variables
  const [changeAboutHColor, setchangeAboutHColor] = useState({
    color: "black"
  });

  function toggleFun() {
    if (mode === "light") {
      setMode("dark");
      settoggleTextSet("Enable Light Mood");
      settoggleColorSet("light");
      document.body.style.backgroundColor = "#042743";
      document.title = "Words Counter (Dark mood enabled)";
      //form page heading styling
      setchangeAboutHColor({
        color: "white"
      });
      //about page heading, button, body styling
      setheadingColorSet({
        color: "white"
      });
      setmyStyleBtnSet({
        color: "white",
        backgroundColor: "#212529"
      });
      setmyStyleBodySet({
        color: "white",
        backgroundColor: "#042743"
      });
    } else {
      setMode("light");
      settoggleTextSet("Enable Dark Mood");
      settoggleColorSet("dark");
      document.body.style.backgroundColor = "white";
      document.title = "Words Counter (Light mood enabled)";
      //form page heading styling
      setchangeAboutHColor({
        color: "black"
      });
      //about page heading, button, body styling 
      setheadingColorSet({
        color: "black"
      });
      setmyStyleBtnSet({
        color: "black"
      });
      setmyStyleBodySet({
        color: "black"
      });
    }
  }
//this is my test msg b
  return (
    <>
      <Router>
        <Navbar modeColor={mode} settoggleFun={toggleFun} toggleText={toggleTextSet} toggleTextColor={toggleColorSet} />
        <Routes>
          <Route exect path="/" element={<Form aboutHeadingColor={changeAboutHColor} />}></Route>
          <Route exect path="/about" element={<About1 headingColor={headingColorSet} myStyleBtn={myStyleBtnSet} myStyleBody={myStyleBodySet} />}></Route>
        </Routes>
      </Router>

      {/* <React.StrictMode> */}
      {/* <Navbar link="https://www.google.com/" name="Search Anything"  /> */}
      {/* <About /> */}
      {/* </React.StrictMode> */}
    </>
  );
}

export default App;
