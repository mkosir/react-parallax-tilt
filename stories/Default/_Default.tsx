import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './Default.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

const _Default = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _Default;
