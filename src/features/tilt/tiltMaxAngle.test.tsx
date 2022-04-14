import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Tilt from '../..';
import { OnMoveParams } from '../../react-parallax-tilt/types';

configure({ adapter: new Adapter() });

describe('Tilt - Max Angle', () => {
  it("Constrain tilt angles - angles shouldn't be tilted more then specified constant", () => {
    const onMove = jest.fn();

    const wrapper = mount<Tilt>(
      <Tilt tiltMaxAngleX={300} tiltMaxAngleY={300} tiltAngleXManual={120} tiltAngleYManual={260} onMove={onMove} />,
    );

    wrapper.simulate('mousemove');

    expect(onMove).toBeCalledWith<[OnMoveParams]>({
      tiltAngleX: 90,
      tiltAngleY: 90,
      tiltAngleXPercentage: 30,
      tiltAngleYPercentage: 30,
      glareAngle: 0,
      glareOpacity: 0,
      eventType: 'mousemove',
    });
  });
});
