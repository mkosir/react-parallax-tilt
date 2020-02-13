import React from 'react';

import DemoTab from 'react-demo-tab';
import Demo from './ParallaxEffect.demotab';

const code = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffect.demotab.scss';

const ParallaxEffect = () => (
  <Tilt className="parallax-effect" perspective={500}>
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffect;
`;

const style = `@import '../ReactParallaxTilt.scss';

.parallax-effect {
  @include background;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: darkgreen;
  color: white;
  border: 5px solid black;
  border-radius: 20px;

  transform-style: preserve-3d;

  .inner-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-style: italic;
    color: white;
    transform: translateZ(60px);
  }
}
`;

const _ParallaxEffect = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DemoTab>
);

export default _ParallaxEffect;
