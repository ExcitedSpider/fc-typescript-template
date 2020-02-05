module.exports = {
  env: {
    browser: false,
    es6: true,
  },
  extends: ['airbnb-base'],
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
    'no-console': ["error", { allow: ["log","debug","warn", "error"] }],
  },
};
