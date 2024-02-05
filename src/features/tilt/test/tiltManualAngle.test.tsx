import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Manual Angle', () => {
  it('should calculate tilt when manual input is provided', async () => {
    const onMove = jest.fn();

    render(
      <TiltTest tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleXManual={60} tiltAngleYManual={45} onMove={onMove} />,
    );

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 45,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 75,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });
  });

  it('should calculate tilt when only X manual input is provided', async () => {
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

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 0,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 0,
      glareAngle: 180,
      glareOpacity: 1,
      eventType: 'initial',
    });
  });

  it('should calculate tilt when only Y manual input is provided', async () => {
    const onMove = jest.fn();

    render(<TiltTest tiltMaxAngleX={60} tiltMaxAngleY={60} tiltAngleYManual={45} onMove={onMove} />);

    await userEvent.hover(screen.getByText('test'));

    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
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
