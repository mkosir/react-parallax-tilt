import React from 'react';

import Tilt from 'index';
import './ParallaxEffect.demozap.css';

const ParallaxEffect = () => (
  <Tilt className="background-stripes parallax-effect" perspective={500}>
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffect;
