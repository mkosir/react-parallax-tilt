import React from 'react';

import Tilt from 'index';

import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const Default = () => (
  <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
    <DefaultComponent />
  </Tilt>
);

export default Default;
