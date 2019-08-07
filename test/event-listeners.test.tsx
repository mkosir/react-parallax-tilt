import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Tilt from '../src';

configure({ adapter: new Adapter() });

describe('Event listeners', () => {
  it('resize', () => {
    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} />);
    const spy = jest.spyOn(wrapper.instance(), 'onWindowResize');
    // @ts-ignore
    window.addEventListener('resize', spy);
    window.dispatchEvent(new Event('resize'));
    expect(wrapper.instance().onWindowResize).toHaveBeenCalled();
    wrapper.instance().componentWillUnmount();
  });

  it('deviceorientation', () => {
    const wrapper = mount<Tilt>(
      <Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} glareEnable={true} gyroscope={true} />,
    );
    const spy = jest.spyOn(wrapper.instance(), 'onWindowResize');
    // @ts-ignore
    window.addEventListener('resize', spy);
    window.dispatchEvent(new Event('resize'));
    expect(wrapper.instance().onWindowResize).toHaveBeenCalled();
    wrapper.instance()['wrapperEl']['updateAnimationId'] = null;
    wrapper.instance().componentWillUnmount();
  });

  it('propchange', () => {
    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} />);
    const spy = jest.spyOn(wrapper.instance(), 'mainLoop');
    expect(wrapper.instance().mainLoop).not.toHaveBeenCalled();
    wrapper.instance().componentDidUpdate();
    expect(wrapper.instance().mainLoop).toHaveBeenCalled();
  });

  it('propchange - callback prop', () => {
    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={jest.fn()} />);
    const spy = jest.spyOn(wrapper.instance(), 'mainLoop');
    expect(wrapper.instance().mainLoop).not.toHaveBeenCalled();
    wrapper.instance().componentDidUpdate();
    expect(wrapper.instance().mainLoop).not.toHaveBeenCalled();
  });
});
