import { WrapperElement } from './types';

export const defaultWrapperElement: WrapperElement<HTMLDivElement> = {
  node: null,
  size: {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  },
  clientPosition: {
    x: null,
    y: null,
    xPercentage: 0,
    yPercentage: 0,
  },
  transitionTimeoutId: undefined,
  updateAnimationId: null,
  scale: 1,
};
