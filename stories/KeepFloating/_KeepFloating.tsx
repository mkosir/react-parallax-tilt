import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './KeepFloating.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const KeepFloating = () => (
  <Tilt reset={false}>
    <DefaultComponent />
  </Tilt>
);

export default KeepFloating;
`;

export const _KeepFloating = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);
