import { WrapperElement } from './types';

export const defaultWrapperElement: WrapperElement<HTMLDivElement> = {
  node: null,
  size: {
    width: null,
    height: null,
    left: null,
    top: null,
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
