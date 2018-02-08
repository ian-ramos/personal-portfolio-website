import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Route path='/' render={(props) => <NavBar {...props} />}/>*/}
        <Route exact path="/" render={(props) => <Home {...props} />} />
      </div>
    );
  }
}

export default App;
