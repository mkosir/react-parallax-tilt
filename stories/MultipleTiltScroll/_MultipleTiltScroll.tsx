import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './MultipleTiltScroll.demozap';

const code = `import React from 'react';

import Tilt from '../../src';
import './MultipleTiltScroll.demozap.scss';
import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

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

export const _MultipleTiltScroll = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);
