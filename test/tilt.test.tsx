import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../src';
import { ElementSizePosition } from '../src/common/types';
import { OnMoveParams } from '../src/react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe("Tilt - (manual input) - Callback 'onMove' should return correct calculated values for defined manual input angles", () => {
  let mockWrapperElSizePosition: ElementSizePosition;
  beforeEach(() => {
    mockWrapperElSizePosition = {
      width: 100,
      height: 100,
      top: 0,
      left: 0,
    };
  });

  it('Tilt', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleXManual={60} tiltAngleYManual={45} onMove={onMove} />,
    );
    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });

  it('Tilt - reverse', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltReverse={true}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );
    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: -45,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: -75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });

  it('Tilt - track on window', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        trackOnWindow={true}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={onMove}
      />,
    );
    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });

    wrapper.instance().componentDidUpdate();
    wrapper.instance().componentWillUnmount();
  });

  it('Tilt&Glare', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="bottom"
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 0,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 0,
      glareAngle: 180,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });

  it('Tilt - only Y manual angle input', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleYManual={45} onMove={onMove} />);

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 45,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });

  it('Tilt events', () => {
    jest.useFakeTimers();

    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    const wrapper = mount<Tilt>(<Tilt onEnter={onEnter} onMove={onMove} onLeave={onLeave} glareEnable={true} />);
    wrapper.simulate('mouseenter');
    jest.runAllTimers();
    wrapper.simulate('mousemove');
    wrapper.simulate('mouseleave');

    expect(onEnter).toBeCalledWith('mouseenter');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: NaN,
      tiltAngleY: NaN,
      tiltAngleXPercentage: NaN,
      tiltAngleYPercentage: NaN,
      glareAngle: 0,
      glareOpacity: NaN,
      eventType: 'mousemove',
    });
    expect(onLeave).toBeCalledWith('mouseleave');
  });

  it("Tilt events - Don't reset", () => {
    const onEnter = jest.fn();
    const onMove = jest.fn();
    const onLeave = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt onEnter={onEnter} onMove={onMove} onLeave={onLeave} glareEnable={true} reset={false} />,
    );

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('mouseenter');
    wrapper.simulate('mousemove', { pageX: 100, pageY: 50 });
    wrapper.simulate('mouseleave');

    expect(onEnter).toBeCalledWith('mouseenter');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
    expect(onLeave).toBeCalledWith('mouseleave');
  });

  it("Tilt events - Don't reset", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(<Tilt onMove={onMove} />);

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('mouseenter');
    wrapper.simulate('mousemove', { pageX: 100, pageY: 50 });
    wrapper.simulate('mouseleave');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });

  it('Tilt events', () => {
    jest.useFakeTimers();
    const onEnter = jest.fn();
    const wrapper = mount<Tilt>(<Tilt onEnter={onEnter} />);
    wrapper.simulate('mouseenter');
    jest.runAllTimers();

    expect(onEnter).toBeCalledWith('mouseenter');
  });

  it("Process input - 'touchmove'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={onMove} />);

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('touchmove', { touches: [{ pageX: 100, pageY: 50 }] });

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -60,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -100,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'touchmove',
    });
  });

  it('Tilt disabled', () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(<Tilt tiltEnable={false} tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={onMove} />);

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('touchmove', { touches: [{ pageX: 100, pageY: 50 }] });

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'touchmove',
    });
  });
});
