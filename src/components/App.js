import React from 'react';

import Navigation from './Navigation/Navigation';
import Intro from './Intro/Intro';
import About from './About/About';
import Education from './Education/Education';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Education />
    </div>
  );
}

export default App;
