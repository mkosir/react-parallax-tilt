import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';

import { TiltTest } from 'utils/TiltTest';

describe('Glare - Style', () => {
  it('should update glare style when hover on element', () => {
    jest.useFakeTimers();

    const onMove = jest.fn();

    const { container } = render(<TiltTest onMove={onMove} glareEnable={true} tiltEnable={false} />);

    const positionStart = [{ pageX: 50, pageY: 50 }];
    const positionEnd = [{ pageX: 100, pageY: 100 }];

    const testElement = screen.getByText('test');
    fireEvent.touchStart(testElement, { touches: positionStart });
    fireEvent.touchMove(testElement, { touches: positionEnd });

    jest.runAllTimers();

    // eslint-disable-next-line
    const tiltElement = container.firstElementChild as Element;

    // eslint-disable-next-line
    const glareWrapperElement = tiltElement.lastElementChild as Element;
    expect(glareWrapperElement).toHaveStyle({
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      'border-radius': 0,
      'pointer-events': 'none',
    });
    expect(glareWrapperElement).toHaveClass('glare-wrapper');

    // eslint-disable-next-line
    const glareElement = glareWrapperElement.firstElementChild;
    expect(glareElement).toHaveStyle({
      position: 'absolute',
      top: '50%',
      left: '50%',
      'transform-origin': '0% 0%',
      'pointer-events': 'none',
      width: '0px',
      height: '0px',
      transition: 'opacity 400ms cubic-bezier(.03,.98,.52,.99)',
      transform: 'rotate(135deg) translate(-50%, -50%)',
      opacity: 0.7,
    });
    expect(glareElement).toHaveClass('glare');
  });
});
