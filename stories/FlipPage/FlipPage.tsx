import React, { useState } from 'react';

import Tilt from '../../src';
import './FlipPage.scss';
import Page from './Page/Page';

const FlipPage = () => {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <div className="flip-page">
      <div className="header">
        <div className="title">
          <div>Flip Page 👆</div>
        </div>
        <div className="form">
          <label>
            <input
              onChange={ev => toggleFlip([ev.target.checked, flipHorizontally])}
              checked={flipVertically}
              type="checkbox"
            />
            Vertically
          </label>
          <label>
            <input
              onChange={ev => toggleFlip([flipVertically, ev.target.checked])}
              checked={flipHorizontally}
              type="checkbox"
            />
            Horizontally
          </label>
        </div>
      </div>
      <div className="page">
        <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
          <Page />
        </Tilt>
      </div>
    </div>
  );
};

export default FlipPage;
