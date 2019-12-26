import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './ParallaxEffectImg.storytab';

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
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _ParallaxEffectImg;
