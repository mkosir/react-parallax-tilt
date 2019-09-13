import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './Gyroscope';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Gyroscope = () => (
  <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
    <DefaultComponent />
  </Tilt>
);

export default Gyroscope;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
