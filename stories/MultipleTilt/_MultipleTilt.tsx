import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './MultipleTilt.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.demotab.scss';
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

export default MultipleTilt;
`;

const style = `.multiple-tilt {
  display: flex;
  flex-direction: row;

  .col {
    $spacing: 20px;
    margin-right: $spacing;

    :first-child {
      margin-bottom: $spacing;
    }
  }
}
`;

export const _MultipleTilt = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
