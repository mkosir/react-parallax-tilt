import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './FlipPage';

const jsx = `import React, { useState } from 'react';

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

export default FlipPage;`;

const scss = `body {
  overflow: hidden;
}

.flip-page {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .title {
      font-size: 22px;
    }
    .form {
      display: flex;
      align-items: flex-start;
      input {
        transform: scale(1.2);
        height: 13px;
        margin-right: 7px;
        margin-left: 20px;
      }
    }
  }

  .page {
    width: 80vw;
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
