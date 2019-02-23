import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// const onvif = require("node-onvif");
import axios from "axios"

// let device = new onvif.OnvifDevice({
//   xaddr: 'http://192.168.1.98:80/onvif/device_service',
//   user : 'admin',
//   pass : '123456'
// });


  
//   // Initialize the OnvifDevice object
//   device.init().then(() => {
//     // Get the UDP stream URL
//     let url = device.getUdpStreamUrl();
//     console.log(url);
//   }).catch((error) => {
//     console.error(error);
//   });


class App extends Component {
  componentWillMount () {
   axios.post("http://localhost:3001/stream").then(console.log).catch(console.log)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
