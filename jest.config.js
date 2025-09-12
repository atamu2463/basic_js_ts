// jest.config.js
/** @type {import('jest').Config} */
const config = {
  // Jestがテストファイルとして認識するパターン
  testMatch: ['**/?(*.)+(spec|test).mjs'],

  // .mjsファイルをBabelで変換するように設定
  transform: {
    '^.+\\.mjs$': 'babel-jest',
  },
};

export default config;