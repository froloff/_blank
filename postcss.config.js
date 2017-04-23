module.exports = () => ({
  plugins: {
    stylelint: {},
    'postcss-mixins': {},
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions'],
    },
    'postcss-reporter': { clearMessages: true },
  },
});
