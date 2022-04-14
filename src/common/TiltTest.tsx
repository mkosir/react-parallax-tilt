import React from 'react';

import Tilt from '..';
import { ReactParallaxTiltProps } from '../react-parallax-tilt/types';

export const TiltTest = (reactParallaxTiltProps: ReactParallaxTiltProps) => (
  <Tilt {...reactParallaxTiltProps}>
    <div style={{ height: '200px', backgroundColor: 'darkgreen' }}>test</div>
  </Tilt>
);
