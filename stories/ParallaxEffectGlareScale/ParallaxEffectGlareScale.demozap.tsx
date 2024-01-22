import React from 'react';

import Tilt from 'index';
import './ParallaxEffectGlareScale.demozap.css';

const ParallaxEffectGlareScale = () => (
  <Tilt
    className="background-stripes parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffectGlareScale;
