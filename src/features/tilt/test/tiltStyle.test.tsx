import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from '../../../utils/TiltTest';

describe('Tilt - Style', () => {
  it('should update tilt style', () => {
    jest.useFakeTimers();

    const onMove = jest.fn();

    render(<TiltTest onMove={onMove} glareEnable={true} />);

    userEvent.hover(screen.getByText('test'));
    jest.runAllTimers();

    // TODO check style
    // expect(onMove).toHaveBeenLastCalledWith<[OnMoveParams]>({
    //   tiltAngleX: 0,
    //   tiltAngleY: -0,
    //   tiltAngleXPercentage: 0,
    //   tiltAngleYPercentage: -0,
    //   glareAngle: 0,
    //   glareOpacity: 0,
    //   eventType: 'autoreset',
    // });
  });
});
