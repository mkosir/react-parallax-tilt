import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './ParallaxEffectImg.doctab';

const code = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffectImg.storytab.scss';
import imgTree from './img/tree.png';

const ParallaxEffectImg = () => (
  <Tilt
    className="parallax-effect-img"
    tiltMaxAngleX={40}
    tiltMaxAngleY={40}
    perspective={800}
    transitionSpeed={1500}
    scale={1.1}
    gyroscope={true}
  >
    <img src={imgTree} className="inner-element" alt="pic" />
  </Tilt>
);

export default ParallaxEffectImg;
`;

const style = `.parallax-effect-img {
  transform-style: preserve-3d;
  transform: perspective(1000px);
  background-image: url('./img/background.jpg');
  background-size: contain;
  background-repeat: no-repeat;

  .inner-element {
    transform: translateZ(40px) scale(0.8);
    width: 70%;
    margin-left: 25%;
  }
}
`;

const _ParallaxEffectImg = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _ParallaxEffectImg;
