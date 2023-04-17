module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};