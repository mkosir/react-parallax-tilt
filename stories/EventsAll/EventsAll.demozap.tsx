import React, { PureComponent } from 'react';

import Tilt from 'index';
import { OnMoveParams } from 'react-parallax-tilt/types';
import './EventsAll.demozap.scss';

class EventsAll extends PureComponent {
  state = {
    tiltAngleX: 0,
    tiltAngleY: 0,
    tiltAngleXPercentage: 0,
    tiltAngleYPercentage: 0,
    glareAngle: 0,
    glareOpacity: 0,
    eventType: null,
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  };

  onMove = ({
    tiltAngleX,
    tiltAngleY,
    tiltAngleXPercentage,
    tiltAngleYPercentage,
    glareAngle,
    glareOpacity,
    eventType,
  }: OnMoveParams) => {
    this.setState({
      tiltAngleX,
      tiltAngleY,
      tiltAngleXPercentage,
      tiltAngleYPercentage,
      glareAngle,
      glareOpacity,
    });

    if (!this.state.trackOnMove) {
      return;
    }
    const eventTypeCheckReset = eventType ? `'${eventType}'` : "prop 'reset={true}'";
    this.setState({
      eventType: `'onMove' triggered by ${eventTypeCheckReset}`,
    });
  };

  onEnter = (eventType: string) => {
    if (!this.state.trackOnEnter) {
      return;
    }
    this.setState({
      eventType: `'onEnter' triggered by '${eventType}'`,
    });
  };

  onLeave = (eventType: string) => {
    if (!this.state.trackOnLeave) {
      return;
    }
    this.setState({
      eventType: `'onLeave' triggered by '${eventType}'`,
    });
  };

  toggleCheck = (ev: any) => {
    const { name, checked } = ev.target;
    this.setState({
      eventType: null,
      [name]: checked,
    });
  };

  render() {
    const {
      tiltAngleX,
      tiltAngleY,
      tiltAngleXPercentage,
      tiltAngleYPercentage,
      glareAngle,
      glareOpacity,
      eventType,
      trackOnMove,
      trackOnEnter,
      trackOnLeave,
    } = this.state;

    return (
      <div className="parallax-events-all">
        <Tilt
          onMove={this.onMove}
          onEnter={this.onEnter}
          onLeave={this.onLeave}
          glareEnable={true}
          glareMaxOpacity={1.0}
          glareColor="white"
          gyroscope={true}
        >
          <div className="react-parallax-tilt">
            <div className="header">Axis x</div>
            <div>
              {tiltAngleX.toFixed(2)}° / {tiltAngleXPercentage.toFixed(2)}%
            </div>
            <div className="header">Axis y</div>
            <div>
              {tiltAngleY.toFixed(2)}° / {tiltAngleYPercentage.toFixed(2)}%
            </div>
            <div className="header">Glare angle</div>
            <div>{glareAngle.toFixed(2)}°</div>
            <div className="header">Glare opacity</div>
            <div>{glareOpacity.toFixed(2)}</div>
          </div>
        </Tilt>
        <div className="event-type">
          Track events:
          <label>
            <input onChange={this.toggleCheck} checked={trackOnMove} name={'trackOnMove'} type="checkbox" />
            onMove
          </label>
          <label>
            <input onChange={this.toggleCheck} checked={trackOnEnter} name={'trackOnEnter'} type="checkbox" />
            onEnter
          </label>
          <label>
            <input onChange={this.toggleCheck} checked={trackOnLeave} name={'trackOnLeave'} type="checkbox" />
            onLeave
          </label>
          {eventType && <div>Event {eventType} event type.</div>}
        </div>
      </div>
    );
  }
}

export default EventsAll;
