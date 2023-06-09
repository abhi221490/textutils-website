
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import React, { useSate } from 'react'
import Alert from './components/Alert';


function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Dark mode has been disabled","success");
    }
  }
  return (
  <>
   <Navbar title="Title" mode={mode} toggle={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3" >
      <TextForm heading="Enter the text to analyze" showAlert={showAlert}mode={mode}/>
   </div>
   </>
  );
}

export default App;
