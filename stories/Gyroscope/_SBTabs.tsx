import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './Gyroscope';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Gyroscope = () => (
  <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
    <DefaultComponent />
  </Tilt>
);

export default Gyroscope;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
