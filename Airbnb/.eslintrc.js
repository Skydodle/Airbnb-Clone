module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native'],
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
  },
  // rules: {
  //   // enable additional rules
  //   indent: ['error', 4],
  //   'linebreak-style': ['error', 'unix'],
  //   quotes: ['error', 'double'],
  //   semi: ['error', 'always'],

  //   // override configuration set by extending "eslint:recommended"
  //   'no-empty': 'warn',
  //   'no-cond-assign': ['error', 'always'],

  //   // disable rules from base configurations
  //   'for-direction': 'off',
  // },
};
