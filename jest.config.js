module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/configs/setup-tests.js',
  setupFiles: ['<rootDir>/configs/setup-tests.js'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
  moduleFileExtensions: [
    'js',
    'html'
  ],
  moduleNameMapper: {
    '\\.(css|less|styl)$': 'identity-obj-proxy',
    '^layout(.*)$': '<rootDir>/src/layout$1',
    '^components(.*)$': '<rootDir>/src/components$1'
  }
}
