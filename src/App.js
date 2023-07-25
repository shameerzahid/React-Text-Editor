
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');


 const [alert, setalert] = useState(null);

 const showAlert = (message,type) =>
 {
setalert(
  {
    msg : message,
    type : type
  })
  setTimeout(() => {
    setalert(null);
  }, 2000);

 }
 const removeclasses = () =>
{
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
}
  const togglemode = (cls) =>
  {
   
    if(mode === 'light')
    {
      removeclasses();
      document.body.classList.add('bg-'+cls)
      setmode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode is enabled","success");
      document.title = 'Textutil - dark mode';
      // setInterval(() => {
      //   document.title = 'Textutil is amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'install textutils now';
      // }, 1500);
        }
    else
    {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enabled","success");
      document.title = 'Textutil - light mode';
    }
  }
  
  return (
    
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About TextUtils"   mode={mode} togglemode={togglemode} />
  <Alert alert={alert} />
    <Routes>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
        <Route exact path="/about" element={<About mode={mode} />} />
    </Routes>
    </BrowserRouter>
   

    

  </>
    
  );
}

export default App;
