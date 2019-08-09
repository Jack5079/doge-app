module.exports = {
  'packagerConfig': {
    'icon': './src/assets/icon'
  },
  'publishers': [{
    name: '@electron-forge/publisher-github',
    config: {
      repository: {
        owner: 'Jack5079',
        name: 'doge-app'
      },
      prerelease: false
    }
  }],
  'makers': [
    {
      'name': '@electron-forge/maker-squirrel',
      'config': {
        'name': 'doge_app',
        'iconUrl': 'https://github.com/Jack5079/doge-app/raw/master/src/assets/icon.ico',
        'setupIcon': './src/assets/icon.ico',
        'loadingGif': './src/assets/loading.gif'
      }
    },
    {
      'name': '@electron-forge/maker-zip',
      'platforms': [
        'darwin'
      ]
    },
    {
      'name': '@electron-forge/maker-deb',
      'config': {}
    },
    {
      'name': '@electron-forge/maker-rpm',
      'config': {}
    }
  ]
}
