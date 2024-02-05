import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Glare', () => {
  it('should calculate glare with top position when top position prop value is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: 45,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate glare with right position when right position prop value is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 60,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 100,
      glareAngle: 0,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate glare with bottom position when bottom position prop value is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 60,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 100,
      glareAngle: 135,
      glareOpacity: 0.5,
      eventType: 'initial',
    });
  });

  it('should calculate glare with left position when left position prop value is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: -135,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate glare with all positions when all position prop value is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: -60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: -100,
      glareAngle: -45,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate glare with default position when glare position prop is not provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={-60}
        tiltAngleYManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        onMove={onMove}
      />,
    );

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: -60,
      tiltAngleY: 60,
      tiltAngleXPercentage: -100,
      tiltAngleYPercentage: 100,
      glareAngle: 45,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });

  it('should calculate flipped glare when flip vertically/horizontally props are enabled', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 120,
      tiltAngleY: 120,
      tiltAngleXPercentage: 200,
      tiltAngleYPercentage: 200,
      glareAngle: 45,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });
});
