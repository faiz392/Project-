import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode]= useState('light');
  
  const toggleMode= ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Navbar title ="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading="Enter text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </> 
  );
}

export default App;
