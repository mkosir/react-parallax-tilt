import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './Default';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt>
    <DefaultComponent />
  </Tilt>
);

export default Default;`;

const SBTabs = () => (
  <SBTabComponent code={code}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
