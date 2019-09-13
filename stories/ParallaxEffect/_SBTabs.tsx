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

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
