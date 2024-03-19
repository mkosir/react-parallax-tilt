import { addons } from '@storybook/manager-api';

import { theme } from './theme';

addons.setConfig({
  theme,
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  bottomPanelHeight: 50,
  panelPosition: false,
});
