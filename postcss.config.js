/* eslint-disable global-require */
module.exports = ({ env }) => ({
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    (env === 'production') && require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
  ].filter(Boolean),
});
