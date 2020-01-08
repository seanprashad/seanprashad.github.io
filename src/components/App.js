import React from 'react';

import Navigation from './Navigation/Navigation';
import Intro from './Intro/Intro';
import About from './About/About';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import OpenSource from './OpenSource/OpenSource';
import Hackathon from './Hackathon/Hackathon';
import Contact from './Contact/Contact';

import { initGA, pageView } from './Tracking';

import './App.scss';

function App() {
  initGA('UA-92642042-1');
  pageView();

  return (
    <div className="App">
      <Navigation />
      <Intro />
      <About />
      <Education />
      <Experience />
      <OpenSource />
      <Hackathon />
      <Contact />
    </div>
  );
}

export default App;
