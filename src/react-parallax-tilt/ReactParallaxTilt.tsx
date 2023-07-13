import React, { PureComponent, MouseEvent, TouchEvent } from 'react';

import { Glare } from 'features/glare/Glare';
import { Tilt } from 'features/tilt/Tilt';
import { setTransition, constrainToRange } from 'utils/helperFns';

import { defaultProps } from './defaultProps';
import { SupportedEvent, EventType, CustomEventType, WrapperElement, DeviceOrientationEventiOS } from './types';
import { ReactParallaxTiltProps } from './types.public';

// All props are initialized by default with non-null values
/* eslint-disable @typescript-eslint/no-non-null-assertion */

export class ReactParallaxTilt extends PureComponent<ReactParallaxTiltProps> {
  public static defaultProps = defaultProps;
  private wrapperEl: WrapperElement = {
    node: null,
    size: {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
    },
    clientPosition: {
      x: null,
      y: null,
      xPercentage: 0,
      yPercentage: 0,
    },
    updateAnimationId: null,
    scale: 1,
  };
  private tilt: Tilt | null = null;
  private glare: Glare | null = null;

  public componentDidMount() {
    this.tilt = new Tilt();
    this.initGlare();
    this.addEventListeners();
    if (typeof CustomEvent === 'undefined') return;
    const autoreset = new CustomEvent<CustomEventType>('autoreset' as CustomEventType);
    this.mainLoop(autoreset);
    const initialEvent = new CustomEvent<CustomEventType>('initial' as CustomEventType);
    this.emitOnMove(initialEvent);
  }

  public componentWillUnmount() {
    if (this.wrapperEl.updateAnimationId !== null) {
      cancelAnimationFrame(this.wrapperEl.updateAnimationId);
    }
    this.removeEventListeners();
  }

  public componentDidUpdate() {
    const eventType = new CustomEvent<CustomEventType>('propChange' as CustomEventType);
    this.mainLoop(eventType);
    this.emitOnMove(eventType);
  }

  private addEventListeners() {
    const { trackOnWindow, gyroscope } = this.props;

    window.addEventListener('resize', this.setSize);

    if (trackOnWindow) {
      window.addEventListener('mouseenter', this.onEnter);
      window.addEventListener('mousemove', this.onMove);
      window.addEventListener('mouseout', this.onLeave);
      window.addEventListener('touchstart', this.onEnter);
      window.addEventListener('touchmove', this.onMove);
      window.addEventListener('touchend', this.onLeave);
    }

    /* istanbul ignore next */
    if (gyroscope) {
      void this.addDeviceOrientationEventListener();
    }
  }

  /* istanbul ignore next */
  private addDeviceOrientationEventListener = async () => {
    // Browser doesn't support Device Orientation.
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!window.DeviceOrientationEvent) {
      return;
    }

    const requestPermission = (DeviceOrientationEvent as unknown as DeviceOrientationEventiOS).requestPermission;
    const iOS = typeof requestPermission === 'function';
    if (iOS) {
      const response = await requestPermission();
      if (response === 'granted') {
        window.addEventListener('deviceorientation', this.onMove);
      }
      return;
    }

    window.addEventListener('deviceorientation', this.onMove);
  };

  private removeEventListeners() {
    const { trackOnWindow, gyroscope } = this.props;

    window.removeEventListener('resize', this.setSize);

    if (trackOnWindow) {
      window.removeEventListener('mouseenter', this.onEnter);
      window.removeEventListener('mousemove', this.onMove);
      window.removeEventListener('mouseout', this.onLeave);
      window.removeEventListener('touchstart', this.onEnter);
      window.removeEventListener('touchmove', this.onMove);
      window.removeEventListener('touchend', this.onLeave);
    }

    // jest - instance of DeviceOrientationEvent not possible
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (gyroscope && window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.onMove);
    }
  }

  public setSize = () => {
    this.setWrapperElSize();
    if (this.glare) {
      this.glare.setSize(this.wrapperEl.size);
    }
  };

  private setWrapperElSize() {
    const rect = this.wrapperEl.node!.getBoundingClientRect();
    this.wrapperEl.size.width = this.wrapperEl.node!.offsetWidth;
    this.wrapperEl.size.height = this.wrapperEl.node!.offsetHeight;
    this.wrapperEl.size.left = rect.left + window.scrollX;
    this.wrapperEl.size.top = rect.top + window.scrollY;
  }

  private initGlare() {
    const { glareEnable, glareBorderRadius } = this.props;

    if (!glareEnable) {
      return;
    }

    this.glare = new Glare(this.wrapperEl.size, glareBorderRadius!);
    this.wrapperEl.node!.appendChild(this.glare.glareWrapperEl);
  }

  public mainLoop = (event: SupportedEvent) => {
    if (this.wrapperEl.updateAnimationId !== null) {
      cancelAnimationFrame(this.wrapperEl.updateAnimationId);
    }
    this.processInput(event);
    this.update(event.type);
    this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame);
  };

  private onEnter = (event: SupportedEvent) => {
    const { onEnter } = this.props;

    // Update wrapped tilt component params in case
    // - it's being manipulated (position, size, etc.) in consumed application
    // - initial (delayed) images/children load
    this.setSize();

    // increase performance by notifying browser 'transform' property is just about to get changed
    this.wrapperEl.node!.style.willChange = 'transform';
    this.setTransitions();

    if (onEnter) {
      onEnter(event.type);
    }
  };

  private onMove = (event: SupportedEvent): void => {
    this.mainLoop(event);
    this.emitOnMove(event);
  };

  private emitOnMove(event: SupportedEvent) {
    const { onMove } = this.props;
    if (!onMove) {
      return;
    }
    let glareAngle = 0;
    let glareOpacity = 0;
    if (this.glare) {
      glareAngle = this.glare.glareAngle;
      glareOpacity = this.glare.glareOpacity;
    }

    onMove({
      tiltAngleX: this.tilt!.tiltAngleX,
      tiltAngleY: this.tilt!.tiltAngleY,
      tiltAngleXPercentage: this.tilt!.tiltAngleXPercentage,
      tiltAngleYPercentage: this.tilt!.tiltAngleYPercentage,
      glareAngle,
      glareOpacity,
      eventType: event.type,
    });
  }

  private onLeave = (event: SupportedEvent) => {
    const { onLeave } = this.props;
    this.setTransitions();

    if (onLeave) {
      onLeave(event.type);
    }

    if (this.props.reset) {
      const autoResetEvent = new CustomEvent<CustomEventType>('autoreset' as CustomEventType);
      this.onMove(autoResetEvent);
    }
  };

  private processInput = (event: SupportedEvent): void => {
    const { scale } = this.props;

    switch (event.type as EventType) {
      case 'mousemove':
        this.wrapperEl.clientPosition.x = (event as MouseEvent).pageX;
        this.wrapperEl.clientPosition.y = (event as MouseEvent).pageY;
        this.wrapperEl.scale = scale!;
        break;
      case 'touchmove':
        this.wrapperEl.clientPosition.x = (event as TouchEvent).touches[0].pageX;
        this.wrapperEl.clientPosition.y = (event as TouchEvent).touches[0].pageY;
        this.wrapperEl.scale = scale!;
        break;
      // jest - instance of DeviceOrientationEvent not possible
      /* istanbul ignore next */
      case 'deviceorientation':
        this.processInputDeviceOrientation(event as DeviceOrientationEvent);
        this.wrapperEl.scale = scale!;
        break;
      case 'autoreset':
        const { tiltAngleXInitial, tiltAngleYInitial, tiltMaxAngleX, tiltMaxAngleY } = this.props;
        const xPercentage = (tiltAngleXInitial! / tiltMaxAngleX!) * 100;
        const yPercentage = (tiltAngleYInitial! / tiltMaxAngleY!) * 100;
        this.wrapperEl.clientPosition.xPercentage = constrainToRange(xPercentage, -100, 100);
        this.wrapperEl.clientPosition.yPercentage = constrainToRange(yPercentage, -100, 100);
        this.wrapperEl.scale = 1;
        break;
    }
  };

  // jest - instance of DeviceOrientationEvent not possible
  /* istanbul ignore next */
  private processInputDeviceOrientation = (event: DeviceOrientationEvent): void => {
    if (!event.gamma || !event.beta || !this.props.gyroscope) {
      return;
    }

    const { tiltMaxAngleX, tiltMaxAngleY } = this.props;

    const angleX = event.beta; // motion of the device around the x axis in degree in the range:[-180,180]
    const angleY = event.gamma; // motion of the device around the y axis in degree in the range:[-90,90]

    this.wrapperEl.clientPosition.xPercentage = (angleX / tiltMaxAngleX!) * 100;
    this.wrapperEl.clientPosition.yPercentage = (angleY / tiltMaxAngleY!) * 100;

    this.wrapperEl.clientPosition.xPercentage = constrainToRange(this.wrapperEl.clientPosition.xPercentage, -100, 100);
    this.wrapperEl.clientPosition.yPercentage = constrainToRange(this.wrapperEl.clientPosition.yPercentage, -100, 100);
  };

  private update = (eventType: string): void => {
    const { tiltEnable, flipVertically, flipHorizontally } = this.props;

    const isAngleSetToDefaultAlready = eventType !== ('autoreset' satisfies EventType);
    const isAngleRetrievedFromGyroscope = eventType !== ('deviceorientation' satisfies EventType);
    const isPropChanged = eventType !== ('propChange' satisfies EventType);
    const isUpdateCalculationNeeded = isAngleSetToDefaultAlready && isAngleRetrievedFromGyroscope && isPropChanged;
    if (isUpdateCalculationNeeded) {
      this.updateClientInput();
    }

    if (tiltEnable) {
      this.tilt!.update(this.wrapperEl.clientPosition, this.props);
    }

    this.updateFlip();

    this.tilt!.updateTiltAnglesPercentage(this.props);

    if (this.glare) {
      this.glare.update(this.wrapperEl.clientPosition, this.props, flipVertically!, flipHorizontally!);
    }
  };

  private updateClientInput = (): void => {
    const { trackOnWindow } = this.props;

    let xTemp;
    let yTemp;
    if (trackOnWindow) {
      const { x, y } = this.wrapperEl.clientPosition;

      xTemp = (y! / window.innerHeight) * 200 - 100;
      yTemp = (x! / window.innerWidth) * 200 - 100;
    } else {
      const {
        size: { width, height, left, top },
        clientPosition: { x, y },
      } = this.wrapperEl;

      xTemp = ((y! - top!) / height!) * 200 - 100;
      yTemp = ((x! - left!) / width!) * 200 - 100;
    }

    this.wrapperEl.clientPosition.xPercentage = constrainToRange(xTemp, -100, 100);
    this.wrapperEl.clientPosition.yPercentage = constrainToRange(yTemp, -100, 100);
  };

  private updateFlip = (): void => {
    const { flipVertically, flipHorizontally } = this.props;

    if (flipVertically) {
      this.tilt!.tiltAngleX += 180;
      this.tilt!.tiltAngleY *= -1;
    }
    if (flipHorizontally) {
      this.tilt!.tiltAngleY += 180;
    }
  };

  public renderFrame = (): void => {
    this.resetWrapperElTransform();

    this.renderPerspective();
    this.tilt!.render(this.wrapperEl.node!);
    this.renderScale();
    if (this.glare) {
      this.glare.render(this.props);
    }
  };

  private resetWrapperElTransform(): void {
    this.wrapperEl.node!.style.transform = '';
  }

  private renderPerspective(): void {
    const { perspective } = this.props;

    this.wrapperEl.node!.style.transform += `perspective(${perspective!}px) `;
  }

  private renderScale(): void {
    const { scale } = this.wrapperEl;

    this.wrapperEl.node!.style.transform += `scale3d(${scale},${scale},${scale})`;
  }

  private setTransitions() {
    const { transitionSpeed, transitionEasing } = this.props;
    setTransition<HTMLDivElement>(this.wrapperEl.node!, 'all', transitionSpeed!, transitionEasing!);

    if (this.glare) {
      setTransition<HTMLDivElement>(this.glare.glareEl, 'opacity', transitionSpeed!, transitionEasing!);
    }
  }

  public render() {
    const { children, className, style } = this.props;
    return (
      <div
        ref={(el) => (this.wrapperEl.node = el)}
        onMouseEnter={this.onEnter}
        onMouseMove={this.onMove}
        onMouseLeave={this.onLeave}
        onTouchStart={this.onEnter}
        onTouchMove={this.onMove}
        onTouchEnd={this.onLeave}
        className={className}
        style={style}
      >
        {children}
      </div>
    );
  }
}
