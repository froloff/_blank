module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'autoprefixer': {},
    'postcss-reporter': { clearMessages: true },
  },
});
