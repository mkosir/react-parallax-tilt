import React from 'react';

import DocTabTemplate from 'react-doc-tab-template';
import Demo from './FlipPage.doctab';

const code = `import React, { useState } from 'react';

import Tilt from '../../src';
import './FlipPage.doctab.scss';
import Page from './Page/Page';

const FlipPage = () => {
  const [[flipVertically, flipHorizontally], toggleFlip] = useState([false, false]);

  return (
    <div className="flip-page">
      <Tilt flipVertically={flipVertically} flipHorizontally={flipHorizontally}>
        <Page
          flipVertically={flipVertically}
          flipHorizontally={flipHorizontally}
          toggleFlipVertically={checked => toggleFlip([checked, flipHorizontally])}
          toggleFlipHorizontally={checked => toggleFlip([flipVertically, checked])}
        />
      </Tilt>
    </div>
  );
};

export default FlipPage;
`;

const style = `body {
  overflow-x: hidden;
}

.flip-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80vw;
}
`;

const _FlipPage = () => (
  <DocTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </DocTabTemplate>
);

export default _FlipPage;
