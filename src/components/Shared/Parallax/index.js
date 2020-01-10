import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const Parallax = props => {
  const { amount, className, children, image } = props;

  return (
    <ParallaxBanner
      className={className}
      layers={[
        {
          amount,
          image,
        },
      ]}
    >
      {children}
    </ParallaxBanner>
  );
};

Parallax.propTypes = {
  amount: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
};

Parallax.defaultProps = {
  className: '',
};

export default Parallax;
