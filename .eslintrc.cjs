module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
     'prettier/prettier': 0,
     'import/prefer-default-export': 'off',
     'react/function-component-definition': 'off'
    //  "react/function-component-definition": "off", 
    //     "react/prop-types": "off", 
    //     "react/react-in-jsx-scope": "off", 
    //     "react/jsx-props-no-spreading": "off", 
  },
};
