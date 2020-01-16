import React, { useState } from 'react';
import { Joystick } from 'react-joystick-component';

import Tilt from '../../src';
import './TiltManualInput.storytab.scss';

const TiltManualInput = () => {
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([0, 0]);

  const onMove = stick => {
    setManualTiltAngle([stick.y, stick.x]);
  };

  const onStop = () => {
    setManualTiltAngle([0, 0]);
  };

  return (
    <div className="tilt-manual-input">
      <Tilt
        tiltAngleXManual={manualTiltAngleX}
        tiltAngleYManual={manualTiltAngleY}
        glareEnable={true}
      >
        <div className="react-parallax-tilt">
          <div>Axis x: {manualTiltAngleX.toFixed(0)}°</div>
          <div>Axis y: {manualTiltAngleY.toFixed(0)}°</div>
        </div>
      </Tilt>
      <div className="manual-input">
        <Joystick baseColor="darkgreen" stickColor="black" move={onMove} stop={onStop} />
      </div>
    </div>
  );
};

export default TiltManualInput;
