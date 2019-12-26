import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './GlareEffect.storytab';

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
  <StoryTabTemplate code={code} codeExt="tsx">
    <Demo />
  </StoryTabTemplate>
);

export default _GlareEffect;
