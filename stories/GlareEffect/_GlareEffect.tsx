import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './GlareEffect.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const GlareEffect = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect;
`;

export const _GlareEffect = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
