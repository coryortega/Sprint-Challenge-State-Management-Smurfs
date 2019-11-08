import React, { Component } from "react";
import SmurfList from "./SmurfList";
import SendSmurf from "./SendSmurf";
import "./App.css";

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>SMURF VILLAGE</h1>
        <SendSmurf />
        <SmurfList />
        
      </div>
    );
  }
}

export default App;
