import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
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

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
