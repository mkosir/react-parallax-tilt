import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './Default';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt>
    <DefaultComponent />
  </Tilt>
);

export default Default;`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
