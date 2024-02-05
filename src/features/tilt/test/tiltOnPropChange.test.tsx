import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Prop change', () => {
  it('should re-calculate tilt when manual tilt angle y prop changes', async () => {
    const onMove = jest.fn();

    const { rerender } = render(
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

    const onMoveRerender = jest.fn();

    rerender(
      <TiltTest
        tiltMaxAngleX={60}
        tiltMaxAngleY={60}
        tiltAngleXManual={60}
        tiltAngleYManual={30}
        onMove={onMoveRerender}
      />,
    );

    expect(onMoveRerender).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 60,
      tiltAngleY: 30,
      tiltAngleXPercentage: 100,
      tiltAngleYPercentage: 50,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'propChange',
    });
  });
});
