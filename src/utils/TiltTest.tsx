import React from 'react';

import Tilt, { ReactParallaxTiltProps } from 'index';

export const TiltTest = (reactParallaxTiltProps: ReactParallaxTiltProps) => (
  <Tilt {...reactParallaxTiltProps}>
    <div style={{ height: '300px', width: '300px', backgroundColor: 'darkgreen' }}>test</div>
  </Tilt>
);
