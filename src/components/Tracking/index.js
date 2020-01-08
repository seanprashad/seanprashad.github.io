import ReactGA from 'react-ga';

// const trackingId = 'UA-92642042-1';
// ReactGA.initialize(trackingId);
// ReactGA.pageview(window.location.pathname + window.location.search);

const initGA = trackingID => {
  ReactGA.initialize(trackingID);
};

const pageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */

const Event = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export { initGA, pageView, Event };
