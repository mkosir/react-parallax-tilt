import React, { useState } from 'react';

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
