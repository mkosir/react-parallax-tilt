import React from 'react';

import StoryTabTemplate from 'story-tab-template-react';
import Demo from './TiltDisableAxis.storytab';

const code = `import React, { useState } from 'react';

import Tilt from '../../src';
import './TiltDisableAxis.storytab.scss';

const TiltDisableAxis = () => {
  const [axisEnabled, toggleAxis] = useState('x');

  return (
    <Tilt tiltAxis={axisEnabled}>
      <div className="tilt-disable-axis">
        <div className="header">
          <div>Toggle Axis</div>
          <hr />
        </div>
        <div className="form">
          <label>
            <input
              onChange={ev => toggleAxis(ev.target.value)}
              value={'x'}
              checked={axisEnabled === 'x'}
              type="radio"
            />
            Enable x axis
          </label>
          <label>
            <input
              onChange={ev => toggleAxis(ev.target.value)}
              value={'y'}
              checked={axisEnabled === 'y'}
              type="radio"
            />
            Enable y axis
          </label>
        </div>
      </div>
    </Tilt>
  );
};

export default TiltDisableAxis;
`;

const style = `@import '../ReactParallax.scss';

.tilt-disable-axis {
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  font-size: 30px;
  font-style: italic;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;
  .header {
    font-size: 38px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      transform: scale(1.5);
      height: 20px;
      margin-right: 7px;
    }
  }
}
`;

const _TiltDisableAxis = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _TiltDisableAxis;
