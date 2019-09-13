import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './ReverseTilt';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const ReverseTilt = () => (
  <Tilt tiltReverse={true}>
    <DefaultComponent />
  </Tilt>
);

export default ReverseTilt;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
