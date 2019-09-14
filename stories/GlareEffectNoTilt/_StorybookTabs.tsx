import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './GlareEffectNoTilt';

const jsx = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffectNoTilt = () => (
  <Tilt
    tiltEnable={false}
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="white"
    glarePosition="bottom"
  >
    <DefaultComponent />
  </Tilt>
);

export default GlareEffectNoTilt;`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
