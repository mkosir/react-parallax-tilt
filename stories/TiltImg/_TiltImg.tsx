import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './TiltImg.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import './TiltImg.doctab.scss';
import imgNyc from './img/nyc.jpg';

const TiltImg = () => (
  <Tilt
    className="tilt-img"
    tiltMaxAngleX={35}
    tiltMaxAngleY={35}
    perspective={900}
    scale={1.1}
    transitionSpeed={2000}
    gyroscope={true}
  >
    <img src={imgNyc} className="inner-element" alt="pic" />
  </Tilt>
);

export default TiltImg;
`;

const style = `.tilt-img {
  .inner-element {
    width: 70vw;
  }
}
`;

const _TiltImg = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _TiltImg;
