import React, { PureComponent } from 'react';

import Tilt, { OnMoveParams } from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';
import './EventTiltAngle.demozap.css';

class EventTiltAngle extends PureComponent {
  state = {
    tiltAngleX: 0,
    tiltAngleY: 0,
  };

  onMove = ({ tiltAngleX, tiltAngleY }: OnMoveParams) => {
    this.setState({ tiltAngleX, tiltAngleY });
  };

  render() {
    const { tiltAngleX, tiltAngleY } = this.state;

    return (
      <div className="event-tilt-angle">
        <Tilt onMove={this.onMove}>
          <DefaultComponent />
        </Tilt>
        <Tilt tiltAngleXManual={tiltAngleX} tiltAngleYManual={tiltAngleY}>
          <div className="component-tilt">
            Component tilt:
            <div className="row">
              x axis:<div>{tiltAngleX.toFixed(2)}°</div>
            </div>
            <div className="row">
              y axis:<div>{tiltAngleY.toFixed(2)}°</div>
            </div>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default EventTiltAngle;
