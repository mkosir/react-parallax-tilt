import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './KeepFloating';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const KeepFloating = () => (
  <Tilt reset={false}>
    <DefaultComponent />
  </Tilt>
);

export default KeepFloating;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
