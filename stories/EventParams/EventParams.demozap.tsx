import React, { useState, ChangeEvent } from 'react';

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

  const toggleCheck = (event: ChangeEvent<HTMLInputElement>) => {
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
        <div className="background-stripes tilt-content">
          <div data-testid="topLeft" className="test-ref top-left" />
          <div data-testid="topMidLeft" className="test-ref top-mid-left" />
          <div data-testid="topRight" className="test-ref top-right" />
          <div data-testid="bottomRight" className="test-ref bottom-right" />
          <div data-testid="bottomLeft" className="test-ref bottom-left" />
          <pre data-testid="params" className="test-params">
            {JSON.stringify(eventParams)}
          </pre>
          <div className="param">
            <div className="header">Axis x</div>
            <div data-testid="tiltAngleX">
              {eventParams.tiltAngleX.toFixed(2)}° / {eventParams.tiltAngleXPercentage.toFixed(2)}%
            </div>
          </div>
          <div className="param">
            <div className="header">Axis y</div>
            <div data-testid="tiltAngleY">
              {eventParams.tiltAngleY.toFixed(2)}° / {eventParams.tiltAngleYPercentage.toFixed(2)}%
            </div>
          </div>
          <div className="param">
            <div className="header">Glare angle</div>
            <div data-testid="glareAngle">{eventParams.glareAngle.toFixed(2)}°</div>
          </div>
          <div className="param">
            <div className="header">Glare opacity</div>
            <div data-testid="glareOpacity">{eventParams.glareOpacity.toFixed(2)}</div>
          </div>
        </div>
      </Tilt>
      <div className="event-type">
        Track events:
        <div>
          <input
            id="onMove"
            onChange={toggleCheck}
            checked={selectedEvents.trackOnMove}
            name={'trackOnMove'}
            type="checkbox"
          />
          <label htmlFor="onMove">onMove</label>
        </div>
        <div>
          <input
            id="onEnter"
            onChange={toggleCheck}
            checked={selectedEvents.trackOnEnter}
            name={'trackOnEnter'}
            type="checkbox"
          />
          <label htmlFor="onEnter">onEnter</label>
        </div>
        <div>
          <input
            id="onLeave"
            onChange={toggleCheck}
            checked={selectedEvents.trackOnLeave}
            name={'trackOnLeave'}
            type="checkbox"
          />
          <label htmlFor="onLeave">onLeave</label>
        </div>
      </div>
      {evenDescription && <div data-testid="evenDescription">{evenDescription}</div>}
    </div>
  );
};

export default EventParams;
