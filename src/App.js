
import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';



function App() {
  const [thm, settheme] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  const setMode = () => {
    if (thm === 'light') {
      settheme('dark')
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      settheme('light')
      showAlert("Light mode has been enabled", "Success")
    }
  }

  return (
    <>
      <Navbar mode={thm} theme={setMode} />
      <Alert alt={alert} />
      <Textarea mode={thm} showAlert={showAlert} />
    </>
  );
}

export default App;
