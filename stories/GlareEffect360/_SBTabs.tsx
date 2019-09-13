import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './GlareEffect360';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
