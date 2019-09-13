import React from 'react';

import SBTabComponent from '../_SBTabComponent/SBTabComponent';
import Demo from './MultipleTilt';

const jsx = `import React from 'react';

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

export default MultipleTilt;`;

const scss = `.multiple-tilt-col {
  $spacing: 20px;
  margin-right: $spacing;

  :first-child {
    margin-bottom: $spacing;
  }
}`;

const SBTabs = () => (
  <SBTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </SBTabComponent>
);

export default SBTabs;
