import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './GlareEffect.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect;
`;

const _GlareEffect = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _GlareEffect;
