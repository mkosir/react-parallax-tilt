import { defaultGlareProps } from '../features/glare/defaultProps';
import { defaultTiltProps } from '../features/tilt/defaultProps';

import { Props } from './types';

export const defaultProps: Props = {
  scale: 1,
  perspective: 1000,
  flipVertically: false,
  flipHorizontally: false,
  reset: true,
  transitionEasing: 'cubic-bezier(.03,.98,.52,.99)',
  transitionSpeed: 400,
  trackOnWindow: false,
  gyroscope: false,
  ...defaultTiltProps,
  ...defaultGlareProps,
};
