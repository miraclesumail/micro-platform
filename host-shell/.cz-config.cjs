// .cz-config.js
module.exports = {
  // 1. 定义 type (提交类型): feat, fix, chore 等
  types: [
    { value: 'feat', name: 'feat:     ✨ 新增功能 (A new feature)' },
    { value: 'fix', name: 'fix:      🐛 修复缺陷 (A bug fix)' },
    { value: 'docs', name: 'docs:     📝 文档更新 (Documentation only changes)' },
    { value: 'style', name: 'style:    💄 代码格式 (Changes that do not affect the meaning of the code)' },
    { value: 'refactor', name: 'refactor: ♻️  代码重构 (A code change that neither fixes a bug nor adds a feature)' },
    { value: 'perf', name: 'perf:     🚀 性能优化 (A code change that improves performance)' },
    { value: 'test', name: 'test:     ✅ 测试相关 (Adding missing tests or correcting existing tests)' },
    { value: 'build', name: 'build:    📦️ 构建相关 (Changes that affect the build system or external dependencies)' },
    { value: 'ci', name: 'ci:       🎡 持续集成 (Changes to our CI configuration files and scripts)' },
    { value: 'chore', name: 'chore:    🔨 其他修改 (Other changes that don\'t modify src or test files)' },
    { value: 'revert', name: 'revert:   ⏪️ 回退代码 (Revert to a commit)' },
  ],

  // 2. 定义 scopes (影响范围): page, components, utils 等
  // 这里就是你想要定制的地方
  scopes: [
    { name: 'pages' },
    { name: 'components' },
    { name: 'hooks' },
    { name: 'utils' },
    { name: 'styles' },
    { name: 'deps' },
    { name: 'config' },
    { name: 'other' }
  ],

  // 交互提示信息
  // messages: {
  //   type: '请选择提交类型(Type):',
  //   scope: '请选择修改范围(Scope):',
  //   // customScope: '请输入修改范围(Scope):', // 如果允许自定义 scope
  //   subject: '请简要描述提交(Subject):',
  //   body: '请输入详细描述(Body) [可选]:',
  //   breaking: '列出任何 BREAKING CHANGES [可选]:',
  //   footer: '请输入要关闭的 issue (如: #31, #34) [可选]:',
  //   confirmCommit: '确定提交说明?(Are you sure you want to proceed with the commit above?)'
  // },

  // 允许自定义 scope (如果上面的 scopes 列表不够用，设为 true 后列表最后会多一个 empty 选项让你手输)
  allowCustomScopes: true,
  // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // 跳过某些步骤
  // skipQuestions: ['body', 'footer'],
  // 限制 subject 长度
  subjectLimit: 100
};