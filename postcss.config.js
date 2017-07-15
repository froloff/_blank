module.exports = () => ({
  plugins: {
    'postcss-mixins': {},
    'postcss-import': {},
    'postcss-nested': {},
    autoprefixer: { browsers: ['last 2 versions'] },
    'postcss-reporter': { clearMessages: true },
  },
});
