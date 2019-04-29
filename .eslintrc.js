// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  // "off"或者0       // 关闭规则关闭
  // "warn"或者1      // 在打开的规则作为警告（不影响退出代码）
  // "error"或者2     // 把规则作为一个错误（退出代码触发时为1）
  rules: {
    // 生成器函数*的前后空格
    'generator-star-spacing': 'off',
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 文件以单一的换行符结束
    'eol-last': 0,
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': [0, 'always'],
    // 空行最多不能超过100行
    'no-multiple-empty-lines': [0, { max: 100 }],
    // 一行结束后面不要有空格
    'no-trailing-spaces': 0,
    // 禁止重复声明变量
    'no-redeclare': 2,
    // new时必须加小括号
    'new-parens': 2,
    // 允许修改内置对象的属性,如prototype
    'no-extend-native': ['error', { exceptions: ['Array', 'Object'] }],
    // 使用严格模式
    strict: 2,
    // 缩进风格
    indent: [2]
  }
}
