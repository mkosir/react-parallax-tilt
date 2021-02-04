import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { spy } from 'sinon';

import Tilt from '../src';
import { ElementSizePosition } from '../src/common/types';

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
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(60, 45, 100, 75, 0, 0, 'mousemove')).toEqual(true);
  });

  it('Tilt - reverse', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltReverse={true}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(-60, -45, -100, -75, 0, 0, 'mousemove')).toEqual(true);
  });

  it('Tilt - track on window', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        trackOnWindow={true}
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={45}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(60, 45, 100, 75, 0, 0, 'mousemove')).toEqual(true);
    wrapper.instance().componentDidUpdate();
    wrapper.instance().componentWillUnmount();
  });

  it('Tilt&Glare', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="bottom"
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(60, 0, 100, 0, 180, 1, 'mousemove')).toEqual(true);
  });

  it('Tilt - only Y manual angle input', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleYManual={45} onMove={wrapperSpy} />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(0, 45, 0, 75, 0, 0, 'mousemove')).toEqual(true);
  });

  it('Tilt events', () => {
    jest.useFakeTimers();
    const wrapperSpyOnEnter = spy();
    const wrapperSpyOnMove = spy();
    const wrapperSpyOnLeave = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        onEnter={wrapperSpyOnEnter}
        onMove={wrapperSpyOnMove}
        onLeave={wrapperSpyOnLeave}
        glareEnable={true}
      />,
    );
    wrapper.simulate('mouseenter');
    jest.runAllTimers();
    wrapper.simulate('mousemove');
    wrapper.simulate('mouseleave');
    expect(wrapperSpyOnEnter.calledWith('mouseenter')).toEqual(true);
    expect(wrapperSpyOnMove.calledWith(NaN, NaN, NaN, NaN, 0, NaN, 'mousemove')).toEqual(true);
    expect(wrapperSpyOnLeave.calledWith('mouseleave')).toEqual(true);
  });

  it("Tilt events - Don't reset", () => {
    const wrapperSpyOnEnter = spy();
    const wrapperSpyOnMove = spy();
    const wrapperSpyOnLeave = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        onEnter={wrapperSpyOnEnter}
        onMove={wrapperSpyOnMove}
        onLeave={wrapperSpyOnLeave}
        glareEnable={true}
        reset={false}
      />,
    );

    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('mouseenter');
    wrapper.simulate('mousemove', { pageX: 100, pageY: 50 });
    wrapper.simulate('mouseleave');
    expect(wrapperSpyOnEnter.calledWith('mouseenter')).toEqual(true);
    expect(wrapperSpyOnMove.calledWith(0, -0, 0, -0, 0, 0, 'initial')).toEqual(true);
    expect(wrapperSpyOnLeave.calledWith('mouseleave')).toEqual(true);
  });

  it("Tilt events - Don't reset", () => {
    const wrapperSpyOnMove = spy();
    const wrapper = mount<Tilt>(<Tilt onEnter={null} onMove={wrapperSpyOnMove} onLeave={null} />);
    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('mouseenter');
    wrapper.simulate('mousemove', { pageX: 100, pageY: 50 });
    wrapper.simulate('mouseleave');
    expect(wrapperSpyOnMove.calledWith(0, -0, 0, -0, 0, 0, 'initial')).toEqual(true);
  });

  it('Tilt events', () => {
    jest.useFakeTimers();
    const wrapperSpyOnEnter = spy();
    const wrapper = mount<Tilt>(<Tilt onEnter={wrapperSpyOnEnter} />);
    wrapper.simulate('mouseenter');
    jest.runAllTimers();
    expect(wrapperSpyOnEnter.calledWith('mouseenter')).toEqual(true);
  });

  it("Process input - 'touchmove'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(<Tilt tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={wrapperSpy} />);
    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('touchmove', { touches: [{ pageX: 100, pageY: 50 }] });
    expect(wrapperSpy.calledWith(0, -60, 0, -100, 0, 0, 'touchmove')).toEqual(true);
  });

  it('Tilt disabled', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt tiltEnable={false} tiltMaxAngleX={60} tiltMaxAngleY={60} onMove={wrapperSpy} />,
    );
    wrapper.instance()['wrapperEl'].size = mockWrapperElSizePosition;
    wrapper.simulate('touchmove', { touches: [{ pageX: 100, pageY: 50 }] });
    expect(wrapperSpy.calledWith(0, 0, 0, 0, 0, 0, 'touchmove')).toEqual(true);
  });
});
