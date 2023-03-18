module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  overrides: [
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    '@typescript-eslint',
    '@angular-eslint',
  ],
  rules: {
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: [
          'sh',
          'test',
          'app',
          'lib',
        ],
        style: 'kebab-case',
      },
    ],
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: [
          'sh',
          'app',
          'dir',
          'ngx',
          'test',
          'lib',
        ],
        style: 'camelCase',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'comma-dangle': 'off',
    'no-new-func': 'error',
    'no-null/no-null': 'off',
    'no-plusplus': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-underscore-dangle': 'off',
    'no-void': 'error',
    //angular
    '@angular-eslint/no-empty-lifecycle-method': 'off',
    '@angular-eslint/no-input-rename': 'off',
    '@angular-eslint/prefer-on-push-component-change-detection': 'off',
    '@angular-eslint/use-component-selector': 'off',
    '@angular-eslint/component-max-inline-declarations': 'off',
    //import
    'import/no-unassigned-import': 'off',
    'import/no-useless-path-segments': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'import/export': 'off',
    'import/no-duplicates': 'off',
    'import/max-dependencies': 'off',
    'simple-import-sort/exports': 'off',
    'simple-import-sort/imports': 'off',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
      }
    }
  }
}

