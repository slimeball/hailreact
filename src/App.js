import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import './App.scss';
import BottmNav from './components/BottomNav'
class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer></MainContainer>
        <BottmNav></BottmNav>
      </div>
    );
  }
}

export default App;
