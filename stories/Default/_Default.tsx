import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './Default.storytab';

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
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _Default;
