import React, { Component } from "react";
import Paragraph from "./Paragraph";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Paragraph />
      </div>
    );
  }
}

export default App;
