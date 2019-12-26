import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './GlareEffect360.storytab';

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
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _GlareEffect360;
