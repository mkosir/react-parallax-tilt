import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './ParallaxEffectGlareScale';

const code = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffectGlareScale.scss';

const ParallaxEffectGlareScale = () => (
  <Tilt
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffectGlareScale;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
