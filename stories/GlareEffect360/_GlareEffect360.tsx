import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './GlareEffect360.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all" glareBorderRadius="20px">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;
`;

export const _GlareEffect360 = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
