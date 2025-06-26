import type { GlareProps } from '@/features/glare/types.public';
import type { TiltProps } from '@/features/tilt/types.public';

import type { SupportedEvent } from './types';

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
     * Scale of the component (`1.5 = 150%, 2 = 200%`).
     */
    scale?: number;
    /**
     * Defines how far the tilt component appears from the user. Lower values create more extreme tilt effects.
     */
    perspective?: number;
    /**
     * Enables/disables vertical flipping of the component.
     */
    flipVertically?: boolean;
    /**
     * Enables/disables horizontal flipping of the component.
     */
    flipHorizontally?: boolean;
    /**
     * Determines if effects should reset on `onLeave` event.
     */
    reset?: boolean;
    /**
     * Easing function for the transition.
     */
    transitionEasing?: string;
    /**
     * Speed of the transition.
     */
    transitionSpeed?: number;
    /**
     * Tracks mouse and touch events across the entire window.
     */
    trackOnWindow?: boolean;
    /**
     * Enables/disables device orientation detection.
     */
    gyroscope?: boolean;
    /**
     * Callback triggered when user moves on the component.
     */
    onMove?: OnMove;
    /**
     * Callback triggered when user enters the component.
     */
    onEnter?: OnEnter;
    /**
     * Callback triggered when user leaves the component.
     */
    onLeave?: OnLeave;
  };
