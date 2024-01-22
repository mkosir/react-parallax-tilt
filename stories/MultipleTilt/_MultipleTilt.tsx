import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './MultipleTilt.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import './MultipleTilt.demozap.css';
import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

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
    margin-right: 20px;

    :first-child {
      margin-bottom: 20px;
    }
  }
}
`;

export const _MultipleTilt = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
