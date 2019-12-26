import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './KeepFloating.storytab';

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
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _KeepFloating;
