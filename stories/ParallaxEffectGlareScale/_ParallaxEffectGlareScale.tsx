import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './ParallaxEffectGlareScale.storytab';

const code = `import React from 'react';

import Tilt from '../../src';
import './ParallaxEffectGlareScale.storytab.scss';

const ParallaxEffectGlareScale = () => (
  <Tilt
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
);

export default ParallaxEffectGlareScale;
`;

const style = `@import '../ReactParallax.scss';

.parallax-effect-glare-scale {
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

const _ParallaxEffectGlareScale = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _ParallaxEffectGlareScale;
