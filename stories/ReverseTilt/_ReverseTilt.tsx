import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './ReverseTilt.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const ReverseTilt = () => (
  <Tilt tiltReverse={true}>
    <DefaultComponent />
  </Tilt>
);

export default ReverseTilt;
`;

export const _ReverseTilt = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
