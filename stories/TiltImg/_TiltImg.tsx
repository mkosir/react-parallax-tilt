import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './TiltImg.storytab';

const code = `import React from 'react';

import Tilt from '../../src';
import './TiltImg.storytab.scss';
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
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _TiltImg;
