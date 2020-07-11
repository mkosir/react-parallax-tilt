# React Tilt

[![npm version][npm-badge]][npm-url]
[![npm bundle size][downloads-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]
[![Build Status][build-badge]][build-url]
[![Codecov Coverage][coverage-badge]][coverage-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

_👀 Easily apply tilt hover effect on React components_

![](demo.gif)

## Demo

**[Demos](https://mkosir.github.io/react-parallax-tilt)** created with [React DemoTab 📑](https://github.com/mkosir/react-demo-tab)

## Install

```bash
npm install react-parallax-tilt
```

## Features

- Lightweight (<4kb), zero dependencies 📦
- Supports **mouse** and **touch** events
- Support for device tilting (**gyroscope**)
- **Glare** effect 🌟 with custom props (color, position,...) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-glare-scale)
- Events to keep track of component values 📐 (tilt, glare, mousemove,...) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--events-all)
- Many effects and functionalities that can be easily applied:
  - **scale** on hover [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--scale)
  - **disable** x/y axis [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--disable-x-y-axis)
  - **flip** component vertically/horizontally [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--flip-vertically-horizontally)
  - tilt hover effect on the **whole window** [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--track-on-window)
  - tilt component with custom **manual input** 🕹 (joystick, slider etc.) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--tilt-manual-input)
  - **parallax** effect on overlaid images [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-image)

## Example

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const App = () => {
  return (
    <Tilt>
      <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## Props

All of the props are optional.  
Below is the complete list of possible props and their options:

> ▶︎ indicates the default value if there's one

**tiltEnable**: _boolean_ ▶︎ `true`  
Boolean to enable/disable tilt effect.

**tiltReverse**: _boolean_ ▶︎ `false`  
Reverse the tilt direction.

**tiltAngleXInitial**: _number_ ▶︎ `0`  
Initial tilt value (degrees) on x axis.

**tiltAngleYInitial**: _number_ ▶︎ `0`  
Initial tilt value (degrees) on y axis.

**tiltMaxAngleX**: _number_ ▶︎ `20`  
Range: `0 - 90`  
Max tilt rotation (degrees) on x axis.

**tiltMaxAngleY**: _number_ ▶︎ `20`  
Range: `0 - 90`  
Max tilt rotation (degrees) on y axis.

**tiltAxis**: _Axis | null_ ▶︎ `null`  
_Axis = 'x' | 'y'_  
Which axis should be enabled. If null both are enabled.

**tiltAngleXManual**: _number_ | null} ▶︎ `null`  
Manual tilt rotation (degrees) on x axis.

**tiltAngleYManual**: _number_ | null} ▶︎ `null`  
Manual tilt rotation (degrees) on y axis.

**glareEnable**: _boolean_ ▶︎ `false`  
Boolean to enable/disable glare effect.

**glareMaxOpacity**: _number_ ▶︎ `0.7`  
Range: `0 - 1`  
The maximum glare opacity (0.5 = 50%, 1 = 100%, etc.).

**glareColor**: _string_ ▶︎ `#ffffff`  
Set color of glare effect.

**glarePosition**: _GlarePosition_ ▶︎ `bottom`  
_GlarePosition = 'top' | 'right' | 'bottom' | 'left' | 'all'_  
Set position of glare effect.

**glareReverse**: _boolean_ ▶︎ `false`  
Reverse the glare direction.

**scale**: _number_ ▶︎ `1`  
Scale of the component (1.5 = 150%, 2 = 200%, etc.).

**perspective**: _number_ ▶︎ `1000`  
The perspective property defines how far the object (wrapped/child component) is away from the user.  
The lower the more extreme the tilt gets.

**flipVertically**: _boolean_ ▶︎ `false`  
Boolean to enable/disable vertical flip of component.

**flipHorizontally**: _boolean_ ▶︎ `false`  
Boolean to enable/disable horizontal flip of component.

**reset**: _boolean_ ▶︎ `true`  
If the effects has to be reset on `onLeave` event.

**transitionEasing**: _string_ ▶︎ `cubic-bezier(.03,.98,.52,.99)`  
Easing of the transition when manipulating the component.

**transitionSpeed**: _number_ ▶︎ `400`  
Speed of the transition when manipulating the component.

**trackOnWindow**: _boolean_ ▶︎ `false`  
Track mouse and touch events on the whole window.

**gyroscope**: _boolean_ ▶︎ `false`  
Boolean to enable/disable device orientation detection.

**onMove**: _Function_ => (**tiltAngleX**: _number_, **tiltAngleY**: _number_, **tiltAngleXPercentage**: _number_, **tiltAngleYPercentage**: _number_, **glareAngle**: _number_, **glareOpacity**: _number_, **eventType**: _string | null_)  
Gets triggered when user moves on the component.

**onEnter**: _Function_ => (**eventType**: _string | null_)  
Gets triggered when user enters the component.

**onLeave**: _Function_ => (**eventType**: _string | null_)  
Gets triggered when user leaves the component.

## Gyroscope - Device Orientation

Please keep in mind that detecting device orientation is currently [experimental technology](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental).  
Check the [browser compatibility](https://caniuse.com/#search=DeviceOrientation) before using this in production.  
A few takeaways when using device orientation event:

- always use secure origins (such as `https`)
- it doesn't work in all browsers when using it in cross-origin `<iframe>` element

<details>
<summary>Using device orientation on iOS 13+</summary>

Apple decided turning device motion and orientation off by default since iOS 12.2.  
With iOS 13+ permission API can be used to gain access to device orientation event.

When using gyroscope feature:

```jsx
  <Tilt gyroscope={true}}>
    <h1>React Parallax Tilt 👀</h1>
  </Tilt>
```

it will present a permission dialog prompting the user to allow motion and orientation access at domain level:
![](device_orientation.jpg)

Note that user needs to take some action (like tapping a button) to be able to display the dialog (invoking dialog on page load is not possible).

</details>

## Development

_Easily set up a local development environment!_

Build all the examples and start storybook server on [localhost:9009](http://localhost:9009):

- clone
- `npm install`
- `npm start`

<details>
<summary>or with npm link</summary>
Clone this repo on your machine, navigate to its location in the terminal and run:

```bash
npm install
npm link # link your local repo to your global packages
npm run build:watch # build the files and watch for changes
```

Clone project repo that you wish to test with react-parallax-tilt library and run:

```bash
npm install
npm link react-parallax-tilt # link your local copy into this project's node_modules
npm start
```

</details>

**Start coding!** 🎉

## Contributing

All contributions are welcome!  
Please take a moment to review guidelines [PR](.github/PULL_REQUEST_TEMPLATE.md) | [Issues](.github/ISSUE_TEMPLATE.md)

[npm-url]: https://www.npmjs.com/package/react-parallax-tilt
[npm-badge]: https://img.shields.io/npm/v/react-parallax-tilt.svg
[size-badge]: https://img.shields.io/bundlephobia/minzip/react-parallax-tilt.svg
[downloads-badge]: https://img.shields.io/npm/dm/react-parallax-tilt.svg?color=blue
[build-badge]: https://travis-ci.com/mkosir/react-parallax-tilt.svg
[build-url]: https://travis-ci.com/mkosir/react-parallax-tilt
[coverage-badge]: https://codecov.io/gh/mkosir/react-parallax-tilt/branch/master/graph/badge.svg
[coverage-url]: https://codecov.io/gh/mkosir/react-parallax-tilt
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
