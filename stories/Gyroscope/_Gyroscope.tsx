import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Gyroscope.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Gyroscope = () => (
  <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
    <DefaultComponent />
  </Tilt>
);

export default Gyroscope;
`;

const _Gyroscope = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _Gyroscope;
