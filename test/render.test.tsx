import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tilt from '../src';

configure({ adapter: new Adapter() });

describe('Render', () => {
  it('Tilt - Should render correct style of wrapper element', () => {
    const wrapper = mount<Tilt>(
      <Tilt
        perspective={1200}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        scale={1.1}
      />,
    );
    wrapper.simulate('mousemove');
    wrapper.instance().renderFrame();
    const glareStyle = wrapper.instance()['wrapperEl'].node.style;
    expect(glareStyle.transform).toEqual(
      'perspective(1200px) rotateX(60deg) rotateY(45deg) scale3d(1.1,1.1,1.1)',
    );
  });

  it('Glare - Should render correct style of glare element', () => {
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={0.85}
        glareColor="white"
        glarePosition="bottom"
      />,
    );
    wrapper.simulate('mousemove');
    wrapper.instance().renderFrame();
    const glareStyle = wrapper.instance()['glare'].glareEl.style;
    expect(glareStyle.transform).toEqual('rotate(135deg) translate(-50%, -50%)');
    expect(glareStyle.opacity).toEqual('0.85');
  });
});
