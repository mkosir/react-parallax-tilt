import { addParameters, configure } from '@storybook/react';
import theme from './config-theme';

addParameters({
  options: {
    theme: theme,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false,
    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',
  },
});

const req = require.context('../stories', true, /.story.(tsx?|ts?)$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
