import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './TiltManualInput.storytab';

const code = `import React, { useState } from 'react';
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
`;

const style = `@import '../ReactParallax.scss';

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

const _TiltManualInput = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _TiltManualInput;
