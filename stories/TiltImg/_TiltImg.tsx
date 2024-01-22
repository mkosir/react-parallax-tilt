import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './TiltImg.demozap';

const code = `import React from 'react';

import Tilt from 'index';

import './TiltImg.demozap.css';
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

export const _TiltImg = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
