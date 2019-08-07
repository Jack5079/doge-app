module.exports = {
  'packagerConfig': {},
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
        'name': 'doge_app'
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
