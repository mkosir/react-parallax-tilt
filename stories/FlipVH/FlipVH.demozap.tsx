import React, { useState } from 'react';

import Tilt from 'index';
import './FlipVH.demozap.css';

const FlipVH = () => {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
      <div className="background-stripes flip-vh">
        <div className="header">
          <div>Toggle Axis</div>
          <hr />
        </div>
        <div className="form">
          <label>
            <input
              onChange={(ev) => toggleFlip([ev.target.checked, flipHorizontally])}
              checked={flipVertically}
              type="checkbox"
            />
            Flip vertically
          </label>
          <label>
            <input
              onChange={(ev) => toggleFlip([flipVertically, ev.target.checked])}
              checked={flipHorizontally}
              type="checkbox"
            />
            Flip horizontally
          </label>
        </div>
      </div>
    </Tilt>
  );
};

export default FlipVH;
