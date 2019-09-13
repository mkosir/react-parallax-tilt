import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './TrackOnWindow';

const jsx = `import React from 'react';

import Tilt from '../../src';
import './TrackOnWindow.scss';

const TrackOnWindow = () => (
  <Tilt
    className="track-on-window"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.75}
    glarePosition="all"
    scale={1.02}
    trackOnWindow={true}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default TrackOnWindow;`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
