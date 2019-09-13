import React from 'react';

import TabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './TiltScale';

const code = `import React, { useState } from 'react';

import Tilt from '../../src';
import './TiltScale.scss';

const TiltScale = () => {
  const [scale, setScale] = useState(1.15);

  return (
    <Tilt scale={scale} transitionSpeed={2500}>
      <div className="tilt-scale">
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
            onChange={ev => setScale(parseFloat(ev.target.value))}
          />
        </div>
      </div>
    </Tilt>
  );
};

export default TiltScale;`;

const SBTabs = () => (
  <TabComponent code={code}>
    <Demo />
  </TabComponent>
);

export default SBTabs;
