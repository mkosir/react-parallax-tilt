import React from 'react';
import DemoTab from 'react-demo-tab';

import Demo from './EventsAll.demotab';

const code = `import React, { PureComponent } from 'react';

import Tilt from '../../src';
import './EventsAll.demotab.scss';

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
  }) => {
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
    const eventTypeCheckReset = eventType ? \`'\${eventType}'\` : "prop 'reset={true}'";
    this.setState({
      eventType: \`'onMove' triggered by \${eventTypeCheckReset}\`,
    });
  };

  onEnter = (eventType) => {
    if (!this.state.trackOnEnter) {
      return;
    }
    this.setState({
      eventType: \`'onEnter' triggered by '\${eventType}'\`,
    });
  };

  onLeave = (eventType) => {
    if (!this.state.trackOnLeave) {
      return;
    }
    this.setState({
      eventType: \`'onLeave' triggered by '\${eventType}'\`,
    });
  };

  toggleCheck = (e) => {
    const { name, checked } = e.target;
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
`;

const style = `@import '../ReactParallaxTilt.scss';

.parallax-events-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .react-parallax-tilt {
    @include background;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    font-size: 28px;
    font-style: italic;
    background-color: darkgreen;
    color: white;
    border: 5px solid black;
    border-radius: 20px;

    .header {
      margin-top: 12px;
      font-size: 35px;
      border-top: 2px solid white;
      min-width: 200px;
      text-align: center;
    }
  }

  .event-type {
    margin-top: 20px;
    font-size: 20px;

    div {
      margin-top: 10px;
    }
  }
}
`;

const _EventsAll = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _EventsAll;
