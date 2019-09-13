import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './GlareEffect360';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
