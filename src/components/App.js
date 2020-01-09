import React from 'react';

import Navigation from './Navigation';
import Intro from './Intro';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import OpenSource from './OpenSource';
import Hackathon from './Hackathon';
import Contact from './Contact';

import { initGA, PageView } from './Tracking';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    initGA('UA-92642042-3', { debug: false });
    PageView();
  }

  render() {
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
}

export default App;
