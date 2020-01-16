import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './MultipleTiltScroll.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTiltScroll.doctab.scss';
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
`;

const style = `.multiple-tilt-scroll > * {
  margin-bottom: 200px;
}
`;

const _MultipleTiltScroll = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _MultipleTiltScroll;
