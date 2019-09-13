import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './ParallaxEffect';

const jsx = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffect.scss';

const ParallaxEffect = () => (
  <Tilt className="parallax-effect" perspective={500}>
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffect;`;

const scss = `.parallax-effect {
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

const SBTabs = () => (
  <SBTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
