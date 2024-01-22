import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './TiltDisableAxis.demozap';

const code = `import React, { useState } from 'react';

import Tilt, { Axis } from 'index';

import './TiltDisableAxis.demozap.css';

const TiltDisableAxis = () => {
  const [axisEnabled, toggleAxis] = useState<Axis>('x');

  return (
    <Tilt tiltAxis={axisEnabled}>
      <div className="background-stripes tilt-disable-axis">
        <div className="header">
          <div>Toggle Axis</div>
          <hr />
        </div>
        <div className="form">
          <label>
            <input
              onChange={(ev) => toggleAxis(ev.target.value as Axis)}
              value={'x'}
              checked={axisEnabled === 'x'}
              type="radio"
            />
            Enable x axis
          </label>
          <label>
            <input
              onChange={(ev) => toggleAxis(ev.target.value as Axis)}
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

const style = `@import '../ReactParallaxTilt.css';

.tilt-disable-axis {
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

export const _TiltDisableAxis = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
