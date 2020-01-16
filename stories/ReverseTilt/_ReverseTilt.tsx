import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './ReverseTilt.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const ReverseTilt = () => (
  <Tilt tiltReverse={true}>
    <DefaultComponent />
  </Tilt>
);

export default ReverseTilt;
`;

const _ReverseTilt = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _ReverseTilt;
