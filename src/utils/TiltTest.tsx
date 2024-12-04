import type { ReactParallaxTiltProps } from 'index';
import Tilt from 'index';

export const TiltTest = (reactParallaxTiltProps: ReactParallaxTiltProps) => (
  <Tilt {...reactParallaxTiltProps}>
    <div style={{ height: '300px', width: '300px', backgroundColor: 'darkgreen' }}>test</div>
  </Tilt>
);
