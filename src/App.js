import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom'; // or TextForm, be consistent
import React, { useState } from 'react';
// import About from './components/About';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#859bc5";
      showAlert("Dark mode is enabled", "Success");
      document.title = 'TextUtils - Dark Mode';

      // Optional: You can remove or keep the blinking title logic
      // setInterval(() => { document.title = 'TextUtils is Amazing Mode' }, 2000);
      // setInterval(() => { document.title = 'TextUtils is Amazinggggg Mode' }, 1000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    // <Router><>

    <>
      <Navbar title="Textutiles1" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
          {/* <Route */}
             {/* exact path="/" */}
            <TextFrom showAlert={showAlert} heading="Enter the text" mode={mode} />
          {/* /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}


export default App;
