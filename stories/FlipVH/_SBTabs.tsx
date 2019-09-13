import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './FlipVH';

const code = `import React, { useState } from 'react';

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

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
