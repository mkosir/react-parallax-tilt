import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './GlareEffectNoTilt';

const code = `import React from 'react';

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
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
