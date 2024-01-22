import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './EventParams.demozap';

const code = `import React, { useState, ChangeEvent } from 'react';

import Tilt, { OnMoveParams } from 'index';

import './EventParams.demozap.css';

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
      setEvenDescription(\`Event 'onMove' triggered by '\${eventType}' event type.\`);
    }

    setEventParams(restEventParams);
  };

  const onEnter = (eventType: string) => {
    if (selectedEvents.trackOnEnter) {
      setEvenDescription(\`Event 'onEnter' triggered by '\${eventType}' event type.\`);
    }
  };

  const onLeave = (eventType: string) => {
    if (selectedEvents.trackOnLeave) {
      setEvenDescription(\`Event 'onLeave' triggered by '\${eventType}' event type.\`);
    }
  };

  const toggleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setEvenDescription(null);
    setSelectedEvents((selectedEvents) => ({
      ...selectedEvents,
      [name]: checked,
    }));
  };

  return (
    <div className="background-stripes event-params">
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
`;

const style = `@import '../ReactParallaxTilt.css';

.event-params {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .react-parallax-tilt {
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
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
