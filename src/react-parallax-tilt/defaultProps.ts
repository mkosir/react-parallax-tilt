import { GlareProps } from '../features/glare/types';
import { TiltProps } from '../features/tilt/types';

import { Props } from './types';

const defaultGlareProps: GlareProps = {
  glareEnable: false,
  glareMaxOpacity: 0.7,
  glareColor: '#ffffff',
  glarePosition: 'bottom',
  glareReverse: false,
  glareBorderRadius: '0',
};

const defaultTiltProps: TiltProps = {
  tiltEnable: true,
  tiltReverse: false,
  tiltAngleXInitial: 0,
  tiltAngleYInitial: 0,
  tiltMaxAngleX: 20,
  tiltMaxAngleY: 20,
  tiltAxis: null,
  tiltAngleXManual: null,
  tiltAngleYManual: null,
};

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
