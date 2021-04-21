module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    '@typescript-eslint/explicit-function-return-type': 0,
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-var-requires': 0,
  },
  globals: {
    process: true,
    module: true,
    app: true,
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },
};
