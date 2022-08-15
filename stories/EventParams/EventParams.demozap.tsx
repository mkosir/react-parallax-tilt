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

  const onMove = (onMoveParams: OnMoveParams) => {
    const { eventType: eventTypeCurrent, ...restCurrent } = onMoveParams;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { eventType: eventTypePrevious, ...restPrevious } = eventParams;

    if (JSON.stringify(restCurrent) === JSON.stringify(restPrevious)) {
      return;
    }

    if (!selectedEvents.trackOnMove) {
      setEventParams({
        ...restCurrent,
        eventType: eventTypePrevious,
      });
      return;
    }

    setEventParams({
      ...restCurrent,
      eventType: eventTypeCurrent,
    });
  };

  const onEnter = (eventType: string) => {
    if (!selectedEvents.trackOnEnter) {
      return;
    }

    setEventParams((eventParams) => ({ ...eventParams, eventType }));
  };

  const onLeave = (eventType: string) => {
    if (!selectedEvents.trackOnLeave) {
      return;
    }

    setEventParams((eventParams) => ({ ...eventParams, eventType }));
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
        {eventParams.eventType && (
          <div>
            Event type <span>{eventParams.eventType}</span> triggered.
          </div>
        )}
      </div>
    </div>
  );
};

export default EventParams;
