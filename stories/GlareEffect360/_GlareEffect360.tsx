import React from 'react';
import DemoTab from 'react-demo-tab';

import Demo from './GlareEffect360.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;
`;

const _GlareEffect360 = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _GlareEffect360;
