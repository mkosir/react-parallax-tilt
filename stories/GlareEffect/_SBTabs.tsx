import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './GlareEffect';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
