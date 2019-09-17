import React from 'react';

import StorybookTabComponent from '../_StorybookTabComponent/StorybookTabComponent';
import Demo from './MultipleTilt';

const jsx = `import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.scss';
import DefaultComponent from '../_DefaultComponent/DefaultComponent';

const MultipleTilt = () => (
  <div className="multiple-tilt">
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
    <div className="col">
      <Tilt>
        <DefaultComponent />
      </Tilt>
      <Tilt>
        <DefaultComponent />
      </Tilt>
    </div>
  </div>
);

export default MultipleTilt;`;

const scss = `.multiple-tilt {
  display: flex;
  flex-direction: row;

  .col {
    $spacing: 20px;
    margin-right: $spacing;

    :first-child {
      margin-bottom: $spacing;
    }
  }
}`;

const StorybookTabs = () => (
  <StorybookTabComponent jsx={jsx} scss={scss}>
    <Demo />
  </StorybookTabComponent>
);

export default StorybookTabs;
