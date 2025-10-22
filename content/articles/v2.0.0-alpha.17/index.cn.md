### 🎉 新特性

- **[client]** 增加对表格行点击事件监听的支持，使用户可以在点击表格中的某一行时执行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
- **[工作流：审批]** 审批触发器中开放审批单据编号变量以供使用 by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复 antd 组件的翻译不生效的问题 ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
- **[数据源：主数据库]** 修复创建反向关系字段后，多节点未同步元数据的问题 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[plugin-demo-platform]** demo 支持自动关闭应用 by @jiannx
- **[多应用]**

  - 多应用数据迁移不触发 hooks by @jiannx
  - 多应用代理支持缓存 by @jiannx
