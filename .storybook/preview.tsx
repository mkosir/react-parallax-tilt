export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    // Description toggle
    // expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
