import React from 'react';
import { DemoTab } from 'react-demo-tab';

import Demo from './ParallaxEffect.demozap';

const code = `import React from 'react';

import Tilt from 'index';
import './ParallaxEffect.demozap.css';

const ParallaxEffect = () => (
  <Tilt className="background-stripes parallax-effect" perspective={500}>
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffect;
`;

const style = `@import '../ReactParallaxTilt.css';

.parallax-effect {
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

export const _ParallaxEffect = () => (
  <DemoTab code={code} style={style} codeExt="tsx" styleExt="css">
    <Demo />
  </DemoTab>
);
