import { addParameters, addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  options: {
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'React Parallax Tilt 👀',
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

addDecorator(withKnobs);

const req = require.context('../stories', true, /.story.(tsx?|ts?)$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
