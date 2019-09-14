import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
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

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
