module.exports = {
  env: {
    es2022: true,
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-import-helpers',
    'import',
    'prettier',
    'simple-import-sort',
    'unused-imports',
  ],
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:import/errors', 'plugin:import/warnings'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [0, { '<js>': 'always' }],

    'prettier/prettier': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 1,
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    // "unused-imports/no-unused-imports": 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
