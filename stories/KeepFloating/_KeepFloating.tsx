import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './KeepFloating.doctab';

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
  <DocTabTemplate code={code} codeExt="tsx">
    <Demo />
  </DocTabTemplate>
);

export default _KeepFloating;
