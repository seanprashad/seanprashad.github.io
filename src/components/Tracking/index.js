import ReactGA from 'react-ga';

const initGA = trackingID => {
  ReactGA.initialize(trackingID);
};

const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

const Event = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export { initGA, PageView, Event };
