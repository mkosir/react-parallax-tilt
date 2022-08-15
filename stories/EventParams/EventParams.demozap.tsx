import React, { useState } from 'react';

import Tilt, { OnMoveParams } from 'index';

import './EventParams.demozap.scss';

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
      ? `Event 'onMove' triggered by '${eventType}' event type.`
      : null;

    console.log('🔎 Log ~ EventParams ~ eventTypeFormatted', eventTypeFormatted);

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
      ? `Event 'onEnter' triggered by '${eventType}' event type.`
      : null;

    setEventParams((eventParams) => ({
      ...eventParams,
      eventType: eventTypeFormatted,
    }));
  };

  const onLeave = (eventType: string) => {
    const eventTypeFormatted = selectedEvents.trackOnLeave
      ? `Event 'onLeave' triggered by '${eventType}' event type.`
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
