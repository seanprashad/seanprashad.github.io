import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>,
  document.getElementById('root'),
);
