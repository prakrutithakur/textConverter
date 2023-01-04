import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type
      }
    );
    setTimeout(() => { setAlert(null) }
      , 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert(" Dark mode has been enabled.", "success");
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled.", "success");
    }
  }
  return (
    <>
      

      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      
        <TextForm heading='Enter the text' mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      
      </div>
      

      

    </>
  );
}
export default App;
