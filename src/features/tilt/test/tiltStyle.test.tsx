import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { TiltTest } from 'utils/TiltTest';

describe('Tilt - Style', () => {
  it('should update tilt style when hover on element', () => {
    jest.useFakeTimers();

    const onMove = jest.fn();

    const { container } = render(<TiltTest onMove={onMove} />);

    const positionStart = [{ pageX: 50, pageY: 50 }];
    const positionEnd = [{ pageX: 100, pageY: 100 }];

    const testElement = screen.getByText('test');
    fireEvent.touchStart(testElement, { touches: positionStart });
    fireEvent.touchMove(testElement, { touches: positionEnd });

    jest.runAllTimers();

    // eslint-disable-next-line
    const tiltElement = container.firstElementChild;
    expect(tiltElement).toHaveStyle({
      'will-change': 'transform',
      transition: 'all 400ms cubic-bezier(.03,.98,.52,.99)',
      transform: 'perspective(1000px) rotateX(20deg) rotateY(-20deg) scale3d(1,1,1)',
    });
  });
});
