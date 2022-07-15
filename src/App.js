import React,{useState } from "react";
import './App.css';

function App() {

const [url,setUrl]=useState('');
const [ip,setIp]=useState('');

 

const print=()=>{
  window.location.href=url+ip;
}

  return (
  <>
  <div className="container">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <label>Host</label>
      <select className="form-select col-lg-4 col-md-8 col-sm-8 form-control" value={url} onChange={(e)=>{setUrl(e.target.value)}}>
        <option >select</option>
        <option value="http://">http</option>
      </select>
      <label>IP Address</label>
      <input className="form-input col-lg-4 col-md-8 col-sm-8 form-control" value={ip} onChange={(e)=>{setIp(e.target.value)}} />
      <button className="form-btn col-lg-2 col-md-1 col-sm-1" onClick={print}>add</button>
    </div>
  </div>
  </>
  );
}
export default App;