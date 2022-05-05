import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './Default.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

export const _Default = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
