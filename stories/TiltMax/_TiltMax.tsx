import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './TiltMax.demotab';

const code = `import React from 'react';
import { number } from '@storybook/addon-knobs';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const TiltMax = () => (
  <Tilt
    tiltMaxAngleX={number('Max tilt - x axis', 60)}
    tiltMaxAngleY={number('Max tilt - y axis', 60)}
    transitionSpeed={2500}
  >
    <DefaultComponent />
  </Tilt>
);

export default TiltMax;
`;

const _TiltMax = () => (
  <DemoTab code={code} codeExt="tsx">
    <Demo />
  </DemoTab>
);

export default _TiltMax;
