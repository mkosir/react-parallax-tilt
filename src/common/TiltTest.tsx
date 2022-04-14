import React from 'react';

import Tilt from '..';
import { Props } from '../react-parallax-tilt/types';

export const TiltTest = (reactParallaxTiltProps: Props) => (
  <Tilt {...reactParallaxTiltProps}>
    <div style={{ height: '200px', backgroundColor: 'darkgreen' }}>test</div>
  </Tilt>
);
