# React Tilt

[![npm version][npm-badge]][npm-url]
[![npm downloads][downloads-badge]][npm-url]
[![npm bundle size][size-badge]][size-url]
[![Open issues][issues-badge]][issues-url]
[![TypeScript][typescript-badge]][typescript-url]
[![semantic-release][semantic-badge]][semantic-url]

[![CI][lint-badge]][lint-url]
[![CI][tsc-badge]][tsc-url]
[![CI][build-badge]][build-url]
[![CI][test-badge]][test-url]
[![CI][test-e2e-badge]][test-e2e-url]
[![Codecov Coverage][coverage-badge]][coverage-url]

[![CI][deploy-storybook-badge]][deploy-storybook-url]
[![CI][npm-release-badge]][npm-release-url]

_👀 Easily apply tilt hover effect on React components_

[![](misc/demo.gif)](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--glare-effect)

## [Demo 💥](https://mkosir.github.io/react-parallax-tilt)

## Install

```bash
npm install react-parallax-tilt
```

## Features

- Lightweight (≈3kB), zero dependencies 📦
- Tree-shakable 🌳 ESM and CommonJS support
- Works with React v15 onwards
- Supports **mouse** and **touch** events
- Support for device tilting (**gyroscope**)
- **Glare** effect 🌟 with custom props (color, position,...) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-glare-scale)
- **Event tracking** for component values 📐 (tilt, glare, mousemove,...) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--event-params)
- Many effects that can be easily applied:
  - **Scale** on hover [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--scale)
  - **Disable** x/y axis [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--tilt-disable-axis)
  - **Flip** component vertically/horizontally [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--flip-vh)
  - **Window** tilt hover effect [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--track-on-window)
  - **Manual tilt** control 🕹 (joystick, slider etc.) [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--tilt-manual-input)
  - **Parallax** effect on overlaid images [🔗demo](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--parallax-effect-img)

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
Max tilt rotation (degrees) on x axis (range: `0°-90°`).

**tiltMaxAngleY**: _number_ ▶︎ `20`  
Max tilt rotation (degrees) on y axis (range: `0°-90°`).

**tiltAxis**: _'x' | 'y'_ ▶︎ `undefined`  
Enable tilt on single axis.

**tiltAngleXManual**: _number_ | null ▶︎ `null`  
Manual tilt rotation (degrees) on x axis.

**tiltAngleYManual**: _number_ | null ▶︎ `null`  
Manual tilt rotation (degrees) on y axis.

**glareEnable**: _boolean_ ▶︎ `false`  
Boolean to enable/disable glare effect.

**glareMaxOpacity**: _number_ ▶︎ `0.7`  
The maximum glare opacity (range: `0-1`).

**glareColor**: _string_ ▶︎ `#ffffff`  
Set color of glare effect.

**glareBorderRadius**: _string_ ▶︎ `0`  
Accepts any standard CSS border radius. Useful if the glare color is different to the page color.

**glarePosition**: _'top' | 'right' | 'bottom' | 'left' | 'all'_ ▶︎ `bottom`  
Set position of glare effect.

**glareReverse**: _boolean_ ▶︎ `false`  
Reverse the glare direction.

**scale**: _number_ ▶︎ `1`  
Scale of the component (1.5 = 150%, 2 = 200%, etc.).

**perspective**: _number_ ▶︎ `1000`  
The perspective property defines how far the object (wrapped/child component) is away from the user. The lower the more extreme the tilt gets.

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

**onMove**: ({ **tiltAngleX**: _number_, **tiltAngleY**: _number_, **tiltAngleXPercentage**: _number_, **tiltAngleYPercentage**: _number_, **glareAngle**: _number_, **glareOpacity**: _number_, **eventType**: _string_ }) => _void_  
Gets triggered when user moves on the component.

**onEnter**: (**eventType**: _string_) => _void_  
Gets triggered when user enters the component.

**onLeave**: (**eventType**: _string_) => _void_  
Gets triggered when user leaves the component.

## Gyroscope - Device Orientation

Please keep in mind that detecting device orientation is currently [experimental technology](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental).  
Check the [browser compatibility](https://caniuse.com/#search=DeviceOrientation) before using it in production.  
A few takeaways when using device orientation event:

- always use secure origins (such as `https`)
- it doesn't work in all browsers when using it in cross-origin `<iframe>` element

<details>
<summary>Using device orientation on iOS 13+</summary>

Apple decided turning device motion and orientation off by default since iOS 12.2.  
With iOS 13+ permission API can be used to gain access to device orientation event.

When using gyroscope feature:

```jsx
<Tilt gyroscope={true}>
  <h1>React Parallax Tilt 👀</h1>
</Tilt>
```

it will present a permission dialog prompting the user to allow motion and orientation access at domain level:  
![](misc/device_orientation.jpg)

Note that user needs to take some action (like tapping a button) to be able to display the dialog (invoking dialog on page load is not possible).

</details>

## Development

_Easily set up a local development environment!_

Build project and start storybook on [localhost](http://localhost:9009):

- clone
- `npm install`
- `npm start`

**Start coding!** 🎉

<details>
<summary>Or setup with npm link</summary>
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

## Contributing

All contributions are welcome!  
Please take a moment to review guidelines [PR](.github/pull_request_template.md) | [Issues](https://github.com/mkosir/react-parallax-tilt/issues/new/choose)

[npm-url]: https://www.npmjs.com/package/react-parallax-tilt
[npm-badge]: https://img.shields.io/npm/v/react-parallax-tilt.svg
[size-url]: https://bundlephobia.com/package/react-parallax-tilt
[size-badge]: https://badgen.net/bundlephobia/minzip/react-parallax-tilt
[downloads-badge]: https://img.shields.io/npm/dm/react-parallax-tilt.svg?color=blue
[lint-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/lint.yml/badge.svg
[lint-url]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/lint.yml
[tsc-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/tsc.yml/badge.svg
[tsc-url]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/tsc.yml
[build-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/build.yml/badge.svg
[build-url]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/build.yml
[test-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/test.yml/badge.svg
[test-url]: https://react-parallax-tilt-test-unit-report.netlify.app/
[test-e2e-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/test-e2e.yml/badge.svg
[test-e2e-url]: https://react-parallax-tilt-test-e2e-report.netlify.app/
[deploy-storybook-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/deploy-storybook.yml/badge.svg
[deploy-storybook-url]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/deploy-storybook.yml
[npm-release-badge]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/npm-release.yml/badge.svg
[npm-release-url]: https://github.com/mkosir/react-parallax-tilt/actions/workflows/npm-release.yml
[coverage-badge]: https://codecov.io/gh/mkosir/react-parallax-tilt/branch/main/graph/badge.svg
[coverage-url]: https://app.codecov.io/github/mkosir/react-parallax-tilt/tree/main
[issues-badge]: https://img.shields.io/github/issues/mkosir/react-parallax-tilt
[issues-url]: https://github.com/mkosir/react-parallax-tilt/issues
[semantic-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
