import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTilt = () => (
  <>
    <div className="multiple-tilt-col">
      <Tilt key={111}>
        <DefaultComponent />
      </Tilt>
      <Tilt key={222}>
        <DefaultComponent />
      </Tilt>
    </div>
    <div className="multiple-tilt-col">
      <Tilt key={333}>
        <DefaultComponent />
      </Tilt>
      <Tilt key={444}>
        <DefaultComponent />
      </Tilt>
    </div>
  </>
);

export default MultipleTilt;
