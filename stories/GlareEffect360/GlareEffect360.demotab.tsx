import React from 'react';

import Tilt from '../../src';
import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const GlareEffect360 = () => (
  <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
    <DefaultComponent />
  </Tilt>
);

export default GlareEffect360;
