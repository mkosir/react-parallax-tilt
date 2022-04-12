import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../src';
import { ElementSizePosition } from '../src/common/types';
import { OnMoveParams } from '../src/react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe("Callback prop 'onMove' should return correct Glare calculated values", () => {
  it("should calculate glare 'top'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: 45,
      glareOpacity: 1,
      eventType: 'mousemove',
    });
  });
});

describe("Glare - angle/opacity - Callback 'onMove' should return correct calculated values for defined manual input angles", () => {
  it("Glare 'top'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={onMove}
      />,
    );
    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(-60, 60, -100, 100, 45, 1, 'mousemove');
  });

  it("Glare 'right'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={0}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="right"
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(0, 60, 0, 100, 0, 1, 'mousemove');
  });

  it("Glare 'bottom'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={0.5}
        glarePosition="bottom"
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(60, 60, 100, 100, 135, 0.5, 'mousemove');
  });

  it("Glare 'left'", () => {
    const onMove = jest.fn();

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
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(-60, 60, -100, 100, -135, 1, 'mousemove');
  });

  it("Glare 'all'", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={-60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="all"
        onMove={onMove}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(-60, -60, -100, -100, -45, 1, 'mousemove');
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
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="top"
        onMove={onMove}
        flipVertically={true}
        flipHorizontally={true}
      />,
    );

    wrapper.simulate('mousemove');
    expect(onMove).toBeCalledWith(120, 120, 200, 200, 45, 0, 'mousemove');
  });
});
