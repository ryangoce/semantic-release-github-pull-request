module.exports = {
  branches: [
    'main'
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    ['@semantic-release/release-notes-generator', {
      linkCompare: false,
      linkReferences: false
    }],
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md'
    }],
    ['@semantic-release/exec', {
      verifyReleaseCmd: 'echo ${nextRelease.version} > VERSION.md',
    }],
    '@semantic-release/github',
    [
      'semantic-release-github-pullrequest', {
        assets: [
          'CHANGELOG.md',
          'VERSION.md',
          'RELEASE.md'
        ],
        baseRef: 'main'
      }
    ]
  ]
}
