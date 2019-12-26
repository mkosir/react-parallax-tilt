import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './MultipleTilt.storytab';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.storytab.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTilt = () => (
  <div className="multiple-tilt">
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
  </div>
);

export default MultipleTilt;
`;

const style = `.multiple-tilt {
  display: flex;
  flex-direction: row;

  .col {
    $spacing: 20px;
    margin-right: $spacing;

    :first-child {
      margin-bottom: $spacing;
    }
  }
}
`;

const _MultipleTilt = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _MultipleTilt;
