import React, { useState } from 'react';

import Tilt from '../../src';
import './TiltDisableAxis.doctab.scss';

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
