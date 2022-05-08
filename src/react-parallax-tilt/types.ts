import { MouseEvent, TouchEvent } from 'react';

import { ElementSizePosition, ClientPosition } from 'utils/types';

export type WrapperElement<T extends HTMLElement> = {
  node: T | null;
  size: ElementSizePosition;
  clientPosition: ClientPosition;
  updateAnimationId: number | null;
  scale: number;
};

type DOMSupportedEvent = Event | MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement> | DeviceOrientationEvent;
export type SupportedEvent = DOMSupportedEvent | CustomEvent<CustomEventType>;

type DOMEventType = 'touchmove' | 'mousemove' | 'deviceorientation';
export type CustomEventType = 'autoreset' | 'initial' | 'propChange';
export type EventType = DOMEventType | CustomEventType;
