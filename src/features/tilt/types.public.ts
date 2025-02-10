export type TiltProps = {
  /**
   * Enables/disables the tilt effect.
   */
  tiltEnable?: boolean;
  /**
   * Reverses the tilt direction.
   */
  tiltReverse?: boolean;
  /**
   * Initial tilt angle (in degrees) on the x-axis.
   */
  tiltAngleXInitial?: number;
  /**
   * Initial tilt angle (in degrees) on the y-axis.
   */
  tiltAngleYInitial?: number;
  /**
   * Maximum tilt rotation (in degrees) on the x-axis (range: `0°-90°`).
   */
  tiltMaxAngleX?: number;
  /**
   * Maximum tilt rotation (in degrees) on the y-axis (range: `0°-90°`).
   */
  tiltMaxAngleY?: number;
  /**
   * Enables tilt on a single axis only.
   */
  tiltAxis?: Axis;
  /**
   * Manual tilt rotation (in degrees) on the x-axis.
   */
  tiltAngleXManual?: number | null;
  /**
   * Manual tilt rotation (in degrees) on the y-axis.
   */
  tiltAngleYManual?: number | null;
};

export type Axis = 'x' | 'y';
