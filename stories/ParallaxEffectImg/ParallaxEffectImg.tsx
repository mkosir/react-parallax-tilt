import React from 'react';

import Tilt from '../../src';
import './ParallaxEffectImg.scss';
import imgTree from './img/tree.png';

const ParallaxEffectImg = () => (
  <Tilt className="parallax-effect-img" tiltMaxAngleX={35} tiltMaxAngleY={35} perspective={600}>
    <img src={imgTree} className="inner-element" alt="pic" />
  </Tilt>
);

export default ParallaxEffectImg;
