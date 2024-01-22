import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './GlareEffectNoTilt.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const GlareEffectNoTilt = () => (
  <Tilt
    tiltEnable={false}
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="white"
    glarePosition="bottom"
    glareBorderRadius="20px"
  >
    <DefaultComponent />
  </Tilt>
);

export default GlareEffectNoTilt;
`;

export const _GlareEffectNoTilt = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
