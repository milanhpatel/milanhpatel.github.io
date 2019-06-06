import React, { Component} from "react";
import "../css/styles.css";
import {hot} from "react-hot-loader";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! I am REACTing </h1>
        <p> *this is an experimental zone. </p>
        <p>sdsdwd</p>
        <p>sdsdwd</p>
      </div>
    );
  }
}

export default hot(module)(App);