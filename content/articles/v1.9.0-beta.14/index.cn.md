### 🎉 新特性

- **[工作流：审批]** 审批触发器中开放审批单据编号变量以供使用 by @mytharcher

### 🚀 优化

- **[server]** 优化加载本地化资源的方法，避免阻塞事件循环 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) by @2013xile

- **[cache]** 避免因 clone 布隆过滤器造成的性能损耗 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) by @2013xile

- **[操作：导入记录]** 改进了在未找到表头时的错误提示信息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) by @mytharcher

### 🐛 修复

- **[client]** 修复字段标题换行截断单词的问题 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) by @katherinehhh

- **[工作流]** 修复应用停止时日志报错的问题 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) by @mytharcher

- **[工作流：审批]**
  - 修复审批提交后数据库报错时事务未正常回滚导致的事务超时问题 by @mytharcher

  - 修复加签后待办数字未更新的问题 by @mytharcher

  - 修复提交审批表单中部分变量未被解析的问题 by @mytharcher

- **[邮件管理]** 捕获同步异常 by @jiannx

