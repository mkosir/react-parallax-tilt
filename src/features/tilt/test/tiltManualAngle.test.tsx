import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Manual Angle', () => {
  it('should calculate tilt with manual input', () => {
    const onMove = jest.fn();

    render(
      <TiltTest tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleXManual={60} tiltAngleYManual={45} onMove={onMove} />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });

  it('should calculate tilt with only X manual input', () => {
    const onMove = jest.fn();

    render(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        glareEnable={true}
        glareMaxOpacity={1}
        glarePosition="bottom"
        onMove={onMove}
      />,
    );

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 0,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 0,
      glareAngle: 180,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate tilt with only Y manual input', () => {
    const onMove = jest.fn();

    render(<TiltTest tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleYManual={45} onMove={onMove} />);

    userEvent.hover(screen.getByText('test'));

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: 45,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });
});
