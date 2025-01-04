import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from './components/SecondCounter.jsx';
import Home from './components/Home.jsx';

let counter = 0;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondCounter seconds={counter}/>
  </React.StrictMode>,
)

setInterval(()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondCounter seconds={counter} />
    </React.StrictMode>,
  )
  counter++;
}, 1000);