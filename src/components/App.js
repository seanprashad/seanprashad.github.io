import React from 'react';

import Navigation from './Navigation/Navigation';
import Intro from './Intro/Intro';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
