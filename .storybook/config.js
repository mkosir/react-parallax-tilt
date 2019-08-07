import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../stories', true, /.story.(tsx?|ts?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
