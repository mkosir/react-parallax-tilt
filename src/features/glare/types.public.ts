export type GlareProps = {
  /**
   * Enables/disables the glare effect.
   */
  glareEnable?: boolean;
  /**
   * Maximum glare opacity (`0.5 = 50%, 1 = 100%`). Range: `0-1`
   */
  glareMaxOpacity?: number;
  /**
   * Sets the color of the glare effect.
   */
  glareColor?: string;
  /**
   * Sets the position of the glare effect.
   */
  glarePosition?: GlarePosition;
  /**
   * Reverses the glare direction.
   */
  glareReverse?: boolean;
  /**
   * Sets the border radius of the glare. Accepts any standard CSS border radius value.
   */
  glareBorderRadius?: string;
};

export type GlarePosition = 'top' | 'right' | 'bottom' | 'left' | 'all';
