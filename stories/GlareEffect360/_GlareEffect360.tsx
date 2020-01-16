import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './GlareEffect360.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;
`;

const _GlareEffect360 = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _GlareEffect360;
