import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './InitialTilt.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

const _InitialTilt = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _InitialTilt;
