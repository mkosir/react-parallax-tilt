import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './TiltManualInput.demozap';

const code = `import React, { useState } from 'react';
import { Joystick } from 'react-joystick-component';
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick';

import Tilt from '../../src';
import './TiltManualInput.demozap.scss';

const TiltManualInput = () => {
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([0, 0]);

  const onMove = (stick: IJoystickUpdateEvent) => {
    setManualTiltAngle([stick.y ?? 0, stick.x ?? 0]);
  };

  const onStop = () => {
    setManualTiltAngle([0, 0]);
  };

  return (
    <div className="tilt-manual-input">
      <Tilt tiltAngleXManual={manualTiltAngleX} tiltAngleYManual={manualTiltAngleY} glareEnable={true}>
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
`;

const style = `@import '../ReactParallaxTilt.scss';

.tilt-manual-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .react-parallax-tilt {
    @include background;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    font-size: 35px;
    font-style: italic;
    background-color: darkgreen;
    color: white;
    border: 5px solid black;
    border-radius: 20px;
  }

  .manual-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }
}
`;

export const _TiltManualInput = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
