module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    // ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [ "eslint:recommended",
  "plugin:react/recommended"],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
   "react/prop-types":[0]
  },
  /**
   * 除了webpack.DefinePlugin和webpack.ProvidePlugin，window的全局变量要在代码里声明const xx = window.xx
   * 声明是为了其他人知道代码变量来源，并且尽可能少声明window/global变量
   */
  globals: {
    '_': false,
    '__dirname': false,
    '__PRODUCTION__': false,
    '__HOST__': false,
    '__OPHOST__': false,
    '__WAPHOST__': false,
    '__TARGET__': false,
    '__TIKU__': false,
    '__OTOHOST__': false,
    '__ENV__': false,
  },
  "plugins": [
    "react"
  ]
}
