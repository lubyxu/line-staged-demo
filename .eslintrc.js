module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    '@ecomfe/eslint-config',
    '@ecomfe/eslint-config/react',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true,
    },
  },
  parser: "babel-eslint",
  "globals": {
    "App": true,
    "Page": true,
    "Component": true,
    "Behavior": true,
    "wx": true,
    "getApp": true,
    "getCurrentPages": true,
  },
  plugins: ["babel", "react", "react-hooks"],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
      },
    },
  },
  rules: {
    "indent": ["error", 2, {"SwitchCase": 1}],
    "semi": ["off"],
    "no-console": "warn",
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    "react/no-array-index-key": "warn",
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "error", // 检查 effect 的依赖
    "babel/object-curly-spacing": [2, "always"]
  }
};
