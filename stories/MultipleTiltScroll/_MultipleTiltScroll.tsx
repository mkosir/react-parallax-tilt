import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './MultipleTiltScroll.storytab';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTiltScroll.storytab.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTiltScroll = () => (
  <div className="multiple-tilt-scroll">
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
  </div>
);

export default MultipleTiltScroll;
`;

const style = `.multiple-tilt-scroll > * {
  margin-bottom: 200px;
}
`;

const _MultipleTiltScroll = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _MultipleTiltScroll;
