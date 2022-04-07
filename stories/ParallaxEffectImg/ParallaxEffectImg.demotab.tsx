import React from 'react';

import Tilt from '../../src';

import './ParallaxEffectImg.demotab.scss';
import imgTree from './img/tree.png';

const ParallaxEffectImg = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={imgTree} className="inner-element" alt="pic" />
  </Tilt>
);

export default ParallaxEffectImg;
