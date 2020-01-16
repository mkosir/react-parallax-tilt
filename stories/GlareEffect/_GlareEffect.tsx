import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './GlareEffect.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect;
`;

const _GlareEffect = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _GlareEffect;
