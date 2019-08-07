import React from 'react';

import Tilt from '../../src';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const GlareEffectNoTilt = () => (
  <Tilt
    tiltEnable={false}
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="white"
    glarePosition="bottom"
  >
    <DefaultComponent />
  </Tilt>
);

export default GlareEffectNoTilt;
