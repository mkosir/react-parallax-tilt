import React, { useState } from 'react';

import Tilt from 'index';
import './ScaleNoTilt.demozap.css';

const ScaleNoTilt = () => {
  const [scale, setScale] = useState(1.3);

  return (
    <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
      <div className="background-stripes scale-no-tilt">
        <div className="header">
          <div>Scale x{scale}</div>
          <hr />
        </div>
        <div className="form">
          <input
            type="range"
            min="0.7"
            max="1.5"
            step="0.01"
            value={scale}
            onChange={(ev) => setScale(parseFloat(ev.target.value))}
          />
        </div>
      </div>
    </Tilt>
  );
};

export default ScaleNoTilt;
