import React from 'react';

import Tilt from 'index';
import './TrackOnWindow.demozap.css';

const TrackOnWindow = () => (
  <Tilt
    className="background-stripes track-on-window"
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

export default TrackOnWindow;
