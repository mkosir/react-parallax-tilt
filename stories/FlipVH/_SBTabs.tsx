import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './FlipVH';

const jsx = `import React, { useState } from 'react';

import Tilt from '../../src';
import './FlipVH.scss';

const FlipVH = () => {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
      <div className="flip-vh">
        <div className="header">
          <div>Toggle Axis</div>
          <hr />
        </div>
        <div className="form">
          <label>
            <input
              onChange={ev => toggleFlip([ev.target.checked, flipHorizontally])}
              checked={flipVertically}
              type="checkbox"
            />
            Flip vertically
          </label>
          <label>
            <input
              onChange={ev => toggleFlip([flipVertically, ev.target.checked])}
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

export default FlipVH;`;

const scss = `.flip-vh {
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
}`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
