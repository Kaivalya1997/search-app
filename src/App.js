import React, { Component } from 'react';
import './App.css';
import Menu  from "./components/router";
class App extends Component {//es6
  render() {
    return (
      <div>
        <div>React</div>
        <Menu></Menu>
      </div>
    );
  }
}

export default App;
