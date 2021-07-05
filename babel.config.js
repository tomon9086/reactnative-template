module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-require',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '~': './'
          }
        }
      ]
    ]
  }
}
