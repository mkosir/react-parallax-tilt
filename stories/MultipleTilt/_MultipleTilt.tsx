import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './MultipleTilt.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTilt.doctab.scss';
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

const _MultipleTilt = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _MultipleTilt;
