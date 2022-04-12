import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../..';
import { ElementSizePosition } from '../../common/types';
import { OnMoveParams } from '../../react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe('Glare', () => {
  describe("Callback prop 'onMove' should return correct Glare calculated values", () => {
    it('should calculate glare with position top', () => {
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

      expect(onMove).toBeCalledWith<[OnMoveParams]>({
        tiltAngleX: 0,
        tiltAngleY: 60,
        tiltAngleXPercentage: 0,
        tiltAngleYPercentage: 100,
        glareAngle: 0,
        glareOpacity: 1,
        eventType: 'mousemove',
      });
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

      expect(onMove).toBeCalledWith<[OnMoveParams]>({
        tiltAngleX: 60,
        tiltAngleY: 60,
        tiltAngleXPercentage: 100,
        tiltAngleYPercentage: 100,
        glareAngle: 135,
        glareOpacity: 0.5,
        eventType: 'mousemove',
      });
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

      expect(onMove).toBeCalledWith<[OnMoveParams]>({
        tiltAngleX: -60,
        tiltAngleY: 60,
        tiltAngleXPercentage: -100,
        tiltAngleYPercentage: 100,
        glareAngle: -135,
        glareOpacity: 1,
        eventType: 'mousemove',
      });
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

      expect(onMove).toBeCalledWith<[OnMoveParams]>({
        tiltAngleX: -60,
        tiltAngleY: -60,
        tiltAngleXPercentage: -100,
        tiltAngleYPercentage: -100,
        glareAngle: -45,
        glareOpacity: 1,
        eventType: 'mousemove',
      });
    });

    it("Glare 'default'", () => {
      const onMove = jest.fn();

      const wrapper = mount<Tilt>(
        <Tilt
          tiltMaxAngleX={60}
          tiltMaxAngleY={60}
          tiltAngleXManual={-60}
          tiltAngleYManual={60}
          glareEnable={true}
          glareMaxOpacity={1}
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
        glareOpacity: 0,
        eventType: 'mousemove',
      });
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

      expect(onMove).toBeCalledWith<[OnMoveParams]>({
        tiltAngleX: 120,
        tiltAngleY: 120,
        tiltAngleXPercentage: 200,
        tiltAngleYPercentage: 200,
        glareAngle: 45,
        glareOpacity: 0,
        eventType: 'mousemove',
      });
    });
  });
});
