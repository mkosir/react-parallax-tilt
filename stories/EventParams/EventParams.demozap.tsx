import React, { useState } from 'react';

import Tilt, { OnMoveParams } from 'index';

import './EventParams.demozap.scss';

type SelectedEvents = {
  trackOnMove: boolean;
  trackOnEnter: boolean;
  trackOnLeave: boolean;
};

const EventParams = () => {
  const [eventParams, setEventParams] = useState<Omit<OnMoveParams, 'eventType'>>({
    tiltAngleX: 0,
    tiltAngleY: 0,
    tiltAngleXPercentage: 0,
    tiltAngleYPercentage: 0,
    glareAngle: 0,
    glareOpacity: 0,
  });
  const [evenDescription, setEvenDescription] = useState<string | null>(null);

  const [selectedEvents, setSelectedEvents] = useState<SelectedEvents>({
    trackOnMove: true,
    trackOnEnter: true,
    trackOnLeave: true,
  });

  const onMove = ({ eventType, ...restEventParams }: OnMoveParams) => {
    if (JSON.stringify(restEventParams) === JSON.stringify(eventParams)) {
      return;
    }

    if (selectedEvents.trackOnMove) {
      setEvenDescription(`Event 'onMove' triggered by '${eventType}' event type.`);
    }

    setEventParams(restEventParams);
  };

  const onEnter = (eventType: string) => {
    if (selectedEvents.trackOnEnter) {
      setEvenDescription(`Event 'onEnter' triggered by '${eventType}' event type.`);
    }
  };

  const onLeave = (eventType: string) => {
    if (selectedEvents.trackOnLeave) {
      setEvenDescription(`Event 'onLeave' triggered by '${eventType}' event type.`);
    }
  };

  const toggleCheck = (event: any) => {
    const { name, checked } = event.target;

    setEvenDescription(null);
    setSelectedEvents((selectedEvents) => ({
      ...selectedEvents,
      [name]: checked,
    }));
  };

  return (
    <div className="event-params">
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
        {evenDescription && <div>{evenDescription}</div>}
      </div>
    </div>
  );
};

export default EventParams;
