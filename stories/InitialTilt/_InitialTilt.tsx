import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './InitialTilt.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

export const _InitialTilt = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
