import { MouseEvent, TouchEvent } from 'react';

import { ElementSizePosition, ClientPosition } from '../common/types';
import { GlareProps } from '../features/glare/types';
import { TiltProps } from '../features/tilt/types';

export interface Props extends TiltProps, GlareProps, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Scale of the component (1.5 = 150%, 2 = 200%, etc.).
   */
  scale?: number;
  /**
   * The perspective property defines how far the object (wrapped/child component) is away from the user. The lower the more extreme the tilt gets.
   */
  perspective?: number;
  /**
   * Boolean to enable/disable vertical flip of component.
   */
  flipVertically?: boolean;
  /**
   * Boolean to enable/disable horizontal flip of component.
   */
  flipHorizontally?: boolean;
  /**
   * If the effects has to be reset on "onLeave" event.
   */
  reset?: boolean;
  /**
   * Easing of the transition when manipulating the component.
   */
  transitionEasing?: string;
  /**
   * Speed of the transition when manipulating the component.
   */
  transitionSpeed?: number;
  /**
   * Track mouse and touch events on the whole window.
   */
  trackOnWindow?: boolean;
  /**
   * Boolean to enable/disable device orientation detection.
   */
  gyroscope?: boolean;
  /**
   * Gets triggered when user moves on the component.
   */
  onMove?: (
    tiltAngleX: number,
    tiltAngleY: number,
    tiltAngleXPercentage: number,
    tiltAngleYPercentage: number,
    glareAngle: number,
    glareOpacity: number,
    eventType: string | null,
  ) => void;
  /**
   * Gets triggered when user enters the component.
   */
  onEnter?: (eventType: string) => void;
  /**
   * Gets triggered when user leaves the component.
   */
  onLeave?: (eventType: string) => void;
}

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
export type CustomEventType = 'autoreset' | 'initial' | 'propChanged';
export type EventType = DOMEventType | CustomEventType;
