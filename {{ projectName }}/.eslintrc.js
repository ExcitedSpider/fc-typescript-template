module.exports = {
  env: {
    browser: false,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 为了可以解析其他后缀名模块
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        /**
         * 为了减小打包体积，RUNTIME中的库都放在devDependencies中
         * 所以需要添加该规则，避免因为直接引用devDependencies中的库而报错
         */
        devDependencies: true,
      },
    ],
    /**
     * 个人习惯不强制添加lambda函数单参数括号
     */
    'arrow-parens': ['error', 'as-needed'],
    /**
     * 在函数计算runtime中，console方法是作为日志使用的，所以允许存在
     */
    'no-console': ['error', { allow: ['log', 'debug', 'warn', 'error'] }],
    /**
     * 俺就是不喜欢加后缀名
     */
    'import/extensions': [
      'error',
      {
        ts: 'never',
        js: 'never',
        jsx: 'never',
        tsx: 'never'
      },
    ],
  },
};
