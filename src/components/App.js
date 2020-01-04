import React from 'react';

import Navigation from './Navigation/Navigation';
import Intro from './Intro/Intro';
import About from './About/About';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
    </div>
  );
}

export default App;
