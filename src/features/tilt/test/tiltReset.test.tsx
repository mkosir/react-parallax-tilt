import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { OnMoveParams } from 'index';
import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Reset', () => {
  it('should not reset tilt when mouse leave an element', () => {
    const onEnter = vi.fn();
    const onMove = vi.fn();
    const onLeave = vi.fn();

    render(<TiltTest onEnter={onEnter} onMove={onMove} onLeave={onLeave} reset={false} />);

    fireEvent.mouseEnter(screen.getByText('test'));

    expect(onEnter).toHaveBeenCalledWith('mouseenter');
    expect(onMove).toHaveBeenCalledWith<[OnMoveParams]>({
      tiltAngleX: 0,
      tiltAngleY: -0,
      tiltAngleXPercentage: 0,
      tiltAngleYPercentage: -0,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'initial',
    });

    fireEvent.mouseLeave(screen.getByText('test'));
    expect(onLeave).toHaveBeenCalledWith('mouseleave');
  });
});
