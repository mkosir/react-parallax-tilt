import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './GlareEffect';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
