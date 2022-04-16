import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from '../../../utils/TiltTest';

describe('Tilt - Style', () => {
  it('should update tilt style', () => {
    jest.useFakeTimers();

    const onMove = jest.fn();

    const { container } = render(<TiltTest onMove={onMove} glareEnable={true} />);

    const tiltElement = screen.getByText('test');

    userEvent.hover(tiltElement);

    jest.runAllTimers();

    expect(container.firstChild).toHaveStyle({
      'will-change': 'transform',
      transition: 'all 400ms cubic-bezier(.03,.98,.52,.99)',
      transform: 'perspective(1000px) rotateX(NaNdeg) rotateY(NaNdeg) scale3d(1,1,1)',
    });
  });
});
