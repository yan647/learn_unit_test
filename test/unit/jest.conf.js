const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'), // 类似 webpack.context
  testMatch: ['<rootDir>/__test__/*.{spec,test}.{vue,js,jsx,ts,tsx}'],//要测试的页面
  testEnvironment: 'jsdom',
  moduleFileExtensions: [// 类似 webpack.resolve.extensions
    'js',
    'json',
    'vue',
    'ts',
    'tsx',
  ],
  // moduleNameMapper: {//mock的文件路径
  //   '^qcs.fe.mc(.*)$': path.resolve(__dirname, '../../..$1'),//项目webpack中配置的alias
  //   '^.+\\.(css|less)$': '<rootDir>/test/unit/styleMock.css',
  // },
  transform: {// 类似 webpack.module.rules
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  setupFiles: ['<rootDir>/test/unit/setup'], // 类似 webpack.entry
  coverageDirectory: '<rootDir>/test/unit/coverage', // 类似 webpack.output
  collectCoverageFrom: [// 类似 webpack 的 rule.include
    'todo/*.{js,vue,ts}',
    '!../../node_modules/**',
  ],
  moduleDirectories: ['<rootDir>/node_modules'],//要测试的文件关联的文件
};
