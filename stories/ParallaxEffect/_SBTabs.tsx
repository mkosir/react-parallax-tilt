import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './ParallaxEffect';

const code = `import React from 'react';

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
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
