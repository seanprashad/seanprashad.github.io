import ReactGA from 'react-ga';

const trackingId = 'UA-92642042-1';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);
