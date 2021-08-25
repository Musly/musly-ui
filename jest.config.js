module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  watchman: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  unmockedModulePathPatterns: [
    'node_modules/react/',
    'node_modules/enzyme/',
  ],
  transform: {
    '^.+\\.(graphql|gql)$': 'jest-transform-graphql',
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.svg$': './scripts/jestFileTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  setupFiles: [
    './scripts/jestSetup.js',
  ],
  setupFilesAfterEnv: [
    './scripts/jestFrameworkSetup.js',
  ],
};
