import { ElementSizePosition, ClientPosition } from 'utils/types';

export type WrapperElement = {
  node: HTMLDivElement | null;
  size: ElementSizePosition;
  clientPosition: ClientPosition;
  updateAnimationId: number | null;
  scale: number;
};

type DOMSupportedEvent = MouseEvent | React.MouseEvent | TouchEvent | React.TouchEvent | DeviceOrientationEvent;
export type SupportedEvent = DOMSupportedEvent | CustomEvent<CustomEventType>;

type DOMEventType = 'touchmove' | 'mousemove' | 'deviceorientation';
export type CustomEventType = 'autoreset' | 'initial' | 'propChange';
export type EventType = DOMEventType | CustomEventType;

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}
