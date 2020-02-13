import React from 'react';

import Tilt from '../../src';
import './MultipleTiltScroll.demotab.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTiltScroll = () => (
  <div className="multiple-tilt-scroll">
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
    <Tilt>
      <DefaultComponent />
    </Tilt>
  </div>
);

export default MultipleTiltScroll;
