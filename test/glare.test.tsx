import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { spy } from 'sinon';

import Tilt from '../src';
import { ElementSizePosition } from '../src/common/types';

configure({ adapter: new Adapter() });

describe("Glare - angle/opacity - Callback 'onMove' should return correct calculated values for defined manual input angles", () => {
  it("Glare 'top'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(-60, 60, -100, 100, 45, 1, 'mousemove')).toEqual(true);
  });

  it("Glare 'right'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={0}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="right"
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(0, 60, 0, 100, 0, 1, 'mousemove')).toEqual(true);
  });

  it("Glare 'bottom'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glarePosition="bottom"
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(60, 60, 100, 100, 135, 0.5, 'mousemove')).toEqual(true);
  });

  it("Glare 'left'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="left"
        glareReverse={true}
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(-60, 60, -100, 100, -135, 1, 'mousemove')).toEqual(true);
  });

  it("Glare 'all'", () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={-60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="all"
        onMove={wrapperSpy}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(-60, -60, -100, -100, -45, 1, 'mousemove')).toEqual(true);
  });

  it("Glare 'default'", () => {
    const jestFn = jest.fn();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        onMove={jestFn}
      />,
    );
    wrapper.simulate('mousemove');
    expect(jestFn).toHaveBeenCalledWith(-60, 60, -100, 100, 45, 0, 'mousemove');
  });

  it("Glare 'setSize' - Should correctly set size of glare element (mock window resize)", () => {
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
      />,
    );
    const wrapperElSize: ElementSizePosition = { width: 150, height: 100, left: 0, top: 0 };
    wrapper.instance()['glare']!.setSize(wrapperElSize);
    const glareStyle = wrapper?.instance()['glare']?.glareEl?.style;
    const { width: w, height: h } = wrapperElSize;
    const wrapperElDiagonal = Math.sqrt(w! ** 2 + h! ** 2);
    expect(glareStyle?.width).toEqual(`${wrapperElDiagonal}px`);
    expect(glareStyle?.height).toEqual(`${wrapperElDiagonal}px`);
  });

  it('Glare with flip vertically/horizontally', () => {
    const wrapperSpy = spy();
    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={wrapperSpy}
        flipVertically={true}
        flipHorizontally={true}
      />,
    );
    wrapper.simulate('mousemove');
    expect(wrapperSpy.calledWith(120, 120, 200, 200, 45, 0, 'mousemove')).toEqual(true);
  });
});
