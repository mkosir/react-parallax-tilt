import { constrainToRange } from 'utils/helperFns';
import { ClientPosition } from 'utils/types';

import { TiltProps } from './types.public';

const TILT_ANGLE_CONSTRAINT = 90;

// All props are initialized by default with non-null values
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export class Tilt {
  public glareAngle = 0;
  public glareOpacity = 0;

  public tiltAngleX = 0;
  public tiltAngleY = 0;
  public tiltAngleXPercentage = 0;
  public tiltAngleYPercentage = 0;

  public update = (wrapperElClientPosition: ClientPosition, props: TiltProps): void => {
    this.updateTilt(wrapperElClientPosition, props);
    this.updateTiltManualInput(wrapperElClientPosition, props);
    this.updateTiltReverse(props);
    this.updateTiltLimits(props);
  };

  private updateTilt = (wrapperElClientPosition: ClientPosition, props: TiltProps): void => {
    const { xPercentage, yPercentage } = wrapperElClientPosition;
    const { tiltMaxAngleX, tiltMaxAngleY } = props;

    const tiltTowardMouse = -1;
    this.tiltAngleX = (xPercentage * tiltMaxAngleX!) / 100;
    this.tiltAngleY = ((yPercentage * tiltMaxAngleY!) / 100) * tiltTowardMouse;
  };

  private updateTiltManualInput = (wrapperElClientPosition: ClientPosition, props: TiltProps): void => {
    const { tiltAngleXManual, tiltAngleYManual, tiltMaxAngleX, tiltMaxAngleY } = props;

    const isManualInputIgnoreOtherInputs = tiltAngleXManual !== null || tiltAngleYManual !== null;
    if (isManualInputIgnoreOtherInputs) {
      this.tiltAngleX = tiltAngleXManual !== null ? tiltAngleXManual! : 0;
      this.tiltAngleY = tiltAngleYManual !== null ? tiltAngleYManual! : 0;
      wrapperElClientPosition.xPercentage = (100 * this.tiltAngleX) / tiltMaxAngleX!;
      wrapperElClientPosition.yPercentage = (100 * this.tiltAngleY) / tiltMaxAngleY!;
    }
  };

  private updateTiltReverse = (props: TiltProps): void => {
    const tiltReverse = props.tiltReverse ? -1 : 1;
    this.tiltAngleX = tiltReverse * this.tiltAngleX;
    this.tiltAngleY = tiltReverse * this.tiltAngleY;
  };

  private updateTiltLimits = (props: TiltProps): void => {
    const { tiltAxis } = props;

    this.tiltAngleX = constrainToRange(this.tiltAngleX, -TILT_ANGLE_CONSTRAINT, TILT_ANGLE_CONSTRAINT);
    this.tiltAngleY = constrainToRange(this.tiltAngleY, -TILT_ANGLE_CONSTRAINT, TILT_ANGLE_CONSTRAINT);

    const isOnlyOneAxisEnabledForTilting = tiltAxis;
    if (isOnlyOneAxisEnabledForTilting) {
      this.tiltAngleX = tiltAxis === 'x' ? this.tiltAngleX : 0;
      this.tiltAngleY = tiltAxis === 'y' ? this.tiltAngleY : 0;
    }
  };

  public updateTiltAnglesPercentage = (props: TiltProps): void => {
    const { tiltMaxAngleX, tiltMaxAngleY } = props;

    this.tiltAngleXPercentage = (this.tiltAngleX / tiltMaxAngleX!) * 100;
    this.tiltAngleYPercentage = (this.tiltAngleY / tiltMaxAngleY!) * 100;
  };

  public render = (element: HTMLDivElement): void => {
    element.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
  };
}
