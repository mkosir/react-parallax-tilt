import React, { useState } from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';
import "./TiltEnable.css";

const TiltEnable = () => {
  const [savePositionState, setSavePositionState] = useState<boolean>(true);
  const [isEnable, setIsEnable] = useState<boolean>(true);
  const onClick = () => {
    setIsEnable(!isEnable);
  };
  return (
    <div>
      <p className="spaceBetweenElements">
        {isEnable ? 'Click' : 'Unclick'} on an element while it is tilted to {isEnable ? 'disable' : 'enable'} the tilt.
      </p>
      <div className="spaceBetweenElements" onClick={onClick}>
        <Tilt tiltEnable={{ tiltEnable: isEnable, options: { savePosition: savePositionState } }}>
          <DefaultComponent />
        </Tilt>
      </div>
      <div>
        <button onClick={() => setSavePositionState(false)}>disable position saving</button>
        <button onClick={() => setSavePositionState(true)}>enable position saving</button>
      </div>
    </div>
  );
};

export default TiltEnable;
