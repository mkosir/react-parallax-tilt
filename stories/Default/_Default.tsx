import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './Default.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt>
    <DefaultComponent />
  </Tilt>
);

export default Default;
`;

const _Default = () => (
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _Default;
