import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
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

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
