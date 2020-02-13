import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './KeepFloating.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const KeepFloating = () => (
  <Tilt reset={false}>
    <DefaultComponent />
  </Tilt>
);

export default KeepFloating;
`;

const _KeepFloating = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _KeepFloating;
