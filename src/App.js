import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Body from './components/Body/Body';

const App = () => {
  return (
      <div className="App">
        <Navigation />
        <Body />
      </div>
  );
}

export default App;

