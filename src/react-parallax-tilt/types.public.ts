import { GlareProps } from 'features/glare/types.public';
import { TiltProps } from 'features/tilt/types.public';

import { SupportedEvent } from './types';

export type OnMoveParams = {
  tiltAngleX: number;
  tiltAngleY: number;
  tiltAngleXPercentage: number;
  tiltAngleYPercentage: number;
  glareAngle: number;
  glareOpacity: number;
  event: SupportedEvent;
};

export type OnMove = (onMoveParams: OnMoveParams) => void;

export type OnEnterParams = {
  event: MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent;
};

export type OnEnter = (onEnterParams: OnEnterParams) => void;

export type OnLeaveParams = {
  event: MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent;
};

export type OnLeave = (onLeaveParams: OnLeaveParams) => void;

type HtmlDivTilt = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;

export type ReactParallaxTiltProps = TiltProps &
  GlareProps &
  HtmlDivTilt & {
    /**
     * Tilt children component
     */
    children?: React.ReactNode;
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
    onMove?: OnMove;
    /**
     * Gets triggered when user enters the component.
     */
    onEnter?: OnEnter;
    /**
     * Gets triggered when user leaves the component.
     */
    onLeave?: OnLeave;
  };
