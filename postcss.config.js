module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    autoprefixer: { browsers: ['last 2 versions'] },
    'postcss-reporter': { clearMessages: true },
  },
});
