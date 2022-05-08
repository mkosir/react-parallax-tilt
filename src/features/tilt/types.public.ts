export type TiltProps = {
  /**
   * Boolean to enable/disable tilt effect.
   */
  tiltEnable?: boolean;
  /**
   * Reverse the tilt direction.
   */
  tiltReverse?: boolean;
  /**
   * Initial tilt value (degrees) on x axis.
   */
  tiltAngleXInitial?: number;
  /**
   * Initial tilt value (degrees) on y axis.
   */
  tiltAngleYInitial?: number;
  /**
   * Max tilt rotation (degrees) on x axis. Range: 0 - 90
   */
  tiltMaxAngleX?: number;
  /**
   * Max tilt rotation (degrees) on y axis. Range: 0 - 90
   */
  tiltMaxAngleY?: number;
  /**
   * Which axis should be enabled.
   */
  tiltAxis?: Axis;
  /**
   * Manual tilt rotation (degrees) on x axis.
   */
  tiltAngleXManual?: number | null;
  /**
   * Manual tilt rotation (degrees) on y axis.
   */
  tiltAngleYManual?: number | null;
};

export type Axis = 'x' | 'y';
