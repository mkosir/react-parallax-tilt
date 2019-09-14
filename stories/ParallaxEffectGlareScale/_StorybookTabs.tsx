import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './ParallaxEffectGlareScale';

const jsx = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffectGlareScale.scss';

const ParallaxEffectGlareScale = () => (
  <Tilt
    className="parallax-effect-glare-scale"
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

export default ParallaxEffectGlareScale;`;

const scss = `.parallax-effect-glare-scale {
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;

  transform-style: preserve-3d;

  .inner-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
