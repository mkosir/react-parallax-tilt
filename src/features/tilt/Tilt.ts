import { TiltProps } from '../../react-parallax-tilt/ReactParallaxTilt';
import { constrainToRange } from '../../common/utils';
import { ClientPosition } from '../../common/types';
import { IStyle } from '../../common/IStyle';

const TILT_ANGLE_CONSTRAINT = 90;

export class Tilt<T extends HTMLElement> implements IStyle {
  public glareAngle: number = 0;
  public glareOpacity: number = 0;

  public transitionTimeoutId: number | undefined;

  public tiltAngleX: number = 0;
  public tiltAngleY: number = 0;
  public tiltAngleXPercentage: number = 0;
  public tiltAngleYPercentage: number = 0;

  public update = (wrapperElClientPosition: ClientPosition, props: TiltProps): void => {
    this.updateTilt(wrapperElClientPosition, props);
    this.updateTiltManualInput(wrapperElClientPosition, props);
    this.updateTiltReverse(props);
    this.updateTiltLimits(props);
  };

  private updateTilt = (wrapperElClientPosition: ClientPosition, props: TiltProps): void => {
    const { xPercentage, yPercentage } = wrapperElClientPosition;
    const { tiltMaxAngleX, tiltMaxAngleY } = props;

    // Calculate tilt angle x/y
    const tiltTowardMouse = -1;
    this.tiltAngleX = (xPercentage! * tiltMaxAngleX!) / 100;
    this.tiltAngleY = ((yPercentage! * tiltMaxAngleY!) / 100) * tiltTowardMouse;
  };

  private updateTiltManualInput = (
    wrapperElClientPosition: ClientPosition,
    props: TiltProps,
  ): void => {
    const { tiltAngleXManual, tiltAngleYManual, tiltMaxAngleX, tiltMaxAngleY } = props;
    // if manual input prop is passed, ignore other inputs
    if (tiltAngleXManual !== null || tiltAngleYManual !== null) {
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

    // constrain tilt angles
    this.tiltAngleX = constrainToRange(
      this.tiltAngleX,
      -TILT_ANGLE_CONSTRAINT,
      TILT_ANGLE_CONSTRAINT,
    );
    this.tiltAngleY = constrainToRange(
      this.tiltAngleY,
      -TILT_ANGLE_CONSTRAINT,
      TILT_ANGLE_CONSTRAINT,
    );

    // disable x/y axis for tilting
    if (tiltAxis) {
      this.tiltAngleX = tiltAxis === 'x' ? this.tiltAngleX : 0;
      this.tiltAngleY = tiltAxis === 'y' ? this.tiltAngleY : 0;
    }
  };

  public updateTiltAnglesPercentage = (props: TiltProps): void => {
    const { tiltMaxAngleX, tiltMaxAngleY } = props;

    this.tiltAngleXPercentage = (this.tiltAngleX / tiltMaxAngleX!) * 100;
    this.tiltAngleYPercentage = (this.tiltAngleY / tiltMaxAngleY!) * 100;
  };

  public render = (element: T): void => {
    element.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
  };
}
