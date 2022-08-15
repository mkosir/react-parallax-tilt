import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './EventParams.demozap';

const code = `import React, { useState } from 'react';

import Tilt, { OnMoveParams } from 'index';

import './EventsAll.demozap.scss';

type EventParams = {
  tiltAngleX: number;
  tiltAngleY: number;
  tiltAngleXPercentage: number;
  tiltAngleYPercentage: number;
  glareAngle: number;
  glareOpacity: number;
  eventType: null | string;
};

type SelectedEvents = {
  trackOnMove: boolean;
  trackOnEnter: boolean;
  trackOnLeave: boolean;
};

const EventParams = () => {
  const [eventParams, setEventParams] = useState<EventParams>({
    tiltAngleX: 0,
    tiltAngleY: 0,
    tiltAngleXPercentage: 0,
    tiltAngleYPercentage: 0,
    glareAngle: 0,
    glareOpacity: 0,
    eventType: null,
  });

  const [selectedEvents, setSelectedEvents] = useState<SelectedEvents>({
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  });

  const onMove = ({
    tiltAngleX,
    tiltAngleY,
    tiltAngleXPercentage,
    tiltAngleYPercentage,
    glareAngle,
    glareOpacity,
    eventType,
  }: OnMoveParams) => {
    console.log('🔎 Log ~ EventParams ~ glareOpacity', glareOpacity);
    console.log('🔎 Log ~ EventParams ~ glareAngle', glareAngle);
    console.log('🔎 Log ~ EventParams ~ tiltAngleYPercentage', tiltAngleYPercentage);
    console.log('🔎 Log ~ EventParams ~ tiltAngleXPercentage', tiltAngleXPercentage);
    console.log('🔎 Log ~ EventParams ~ tiltAngleY', tiltAngleY);
    console.log('🔎 Log ~ EventParams ~ tiltAngleX', tiltAngleX);
    const eventTypeFormatted = selectedEvents.trackOnMove
      ? \`Event 'onMove' triggered by '\${eventType}' event type.\`
      : null;

    // setEventParams({
    //   tiltAngleX,
    //   tiltAngleY,
    //   tiltAngleXPercentage,
    //   tiltAngleYPercentage,
    //   glareAngle,
    //   glareOpacity,
    //   eventType: eventTypeFormatted,
    // });
  };

  const onEnter = (eventType: string) => {
    const eventTypeFormatted = selectedEvents.trackOnEnter
      ? \`Event 'onEnter' triggered by '\${eventType}' event type.\`
      : null;

    setEventParams((eventParams) => ({
      ...eventParams,
      eventType: eventTypeFormatted,
    }));
  };

  const onLeave = (eventType: string) => {
    const eventTypeFormatted = selectedEvents.trackOnLeave
      ? \`Event 'onLeave' triggered by '\${eventType}' event type.\`
      : null;

    setEventParams((eventParams) => ({
      ...eventParams,
      eventType: eventTypeFormatted,
    }));
  };

  const toggleCheck = (event: any) => {
    const { name, checked } = event.target;

    setSelectedEvents((selectedEvents) => ({
      ...selectedEvents,
      [name]: checked,
    }));
  };

  return (
    <div className="parallax-events-all">
      <Tilt
        onMove={onMove}
        onEnter={onEnter}
        onLeave={onLeave}
        glareEnable={true}
        glareMaxOpacity={1.0}
        glareColor="white"
        gyroscope={true}
      >
        <div className="react-parallax-tilt">
          <div className="header">Axis x</div>
          <div>
            {eventParams.tiltAngleX.toFixed(2)}° / {eventParams.tiltAngleXPercentage.toFixed(2)}%
          </div>
          <div className="header">Axis y</div>
          <div>
            {eventParams.tiltAngleY.toFixed(2)}° / {eventParams.tiltAngleYPercentage.toFixed(2)}%
          </div>
          <div className="header">Glare angle</div>
          <div>{eventParams.glareAngle.toFixed(2)}°</div>
          <div className="header">Glare opacity</div>
          <div>{eventParams.glareOpacity.toFixed(2)}</div>
        </div>
      </Tilt>
      <div className="event-type">
        Track events:
        <label>
          <input onChange={toggleCheck} checked={selectedEvents.trackOnMove} name={'trackOnMove'} type="checkbox" />
          onMove
        </label>
        <label>
          <input onChange={toggleCheck} checked={selectedEvents.trackOnEnter} name={'trackOnEnter'} type="checkbox" />
          onEnter
        </label>
        <label>
          <input onChange={toggleCheck} checked={selectedEvents.trackOnLeave} name={'trackOnLeave'} type="checkbox" />
          onLeave
        </label>
        {eventParams.eventType && <div>{eventParams.eventType}</div>}
      </div>
    </div>
  );
};

export default EventParams;
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

export const _EventParams = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
