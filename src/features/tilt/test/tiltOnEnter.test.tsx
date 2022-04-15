import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import { TiltTest } from '../../../utils/TiltTest';

describe('Tilt - onEnter', () => {
  it('should trigger onEnter event', () => {
    const onEnter = jest.fn();

    render(<TiltTest onEnter={onEnter} />);

    userEvent.hover(screen.getByText('test'));

    expect(onEnter).toBeCalledWith('mouseenter');
  });
});
