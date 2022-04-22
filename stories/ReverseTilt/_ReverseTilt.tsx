import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './ReverseTilt.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const ReverseTilt = () => (
  <Tilt tiltReverse={true}>
    <DefaultComponent />
  </Tilt>
);

export default ReverseTilt;
`;

const _ReverseTilt = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _ReverseTilt;
