# NocoBase 2.0 发布日志

NocoBase 终于迎来了 2.0 版本！此次大版本全面重构了前端架构，并引入了创新的 AI 员工，为你的应用管理和自动化流程带来全新体验。

## 新特性

### 全新文档站

为了帮助用户更快学习和掌握 NocoBase，我们对官方文档进行了全面改版。从基础入门到进阶开发，文档内容更加细致、结构更加清晰。

![image-5kpkcp.png](https://static-docs.nocobase.com/image-5kpkcp.png)

- [访问新文档 (持续开发中)](https://develop.v2.docs.nocobase.com/cn/)

### 前端流引擎 FlowEngine

FlowEngine 是 NocoBase 2.0 全新推出的前端无代码、低代码开发引擎。它将模型（Model）与流（Flow）结合，简化前端逻辑、提升复用性与可维护性；同时，借助 Flow 的可配置能力，为前端组件和业务逻辑赋予无代码化的配置与编排能力。

- [了解 FlowEngine](https://develop.v2.docs.nocobase.com/cn/flow-engine)

### 全新的 2.0 页面

我们对基础的区块、字段和操作进行了重构，新增了事件流（初版）和 RunJS（实验性）。让你在界面配置上拥有更多灵活性与控制力。
![image-f89cws.png](https://static-docs.nocobase.com/image-f89cws.png)

- [快速入门](https://develop.v2.docs.nocobase.com/cn/interface-builder/quickstart)
- [事件流（初版）](https://develop.v2.docs.nocobase.com/cn/interface-builder/quickstart)
- [RunJS（实验性功能）](https://develop.v2.docs.nocobase.com/cn/interface-builder/quickstart)

### AI 员工

NocoBase 中的 AI 员工不是聊天机器人，也不是普通的 Agent，而是无缝融入到你的业务系统中，驻扎在你需要他们的地方，自动理解业务上下文，与你并肩完成任务的智能同事。

> 官方 CRM Demo 已预置常用 AI 员工与任务，无需配置即可[快速体验](https://demo.nocobase.com/new)。

![img_v3_02rj_c111ae6b-86fe-4158-91b0-a67bf78cbd5g-4e9gu9.jpg](https://static-docs.nocobase.com/img_v3_02rj_c111ae6b-86fe-4158-91b0-a67bf78cbd5g-4e9gu9.jpg)

- [了解 AI 员工](https://develop.v2.docs.nocobase.com/cn/ai-employees)

### 多应用与多空间

- **多应用 2.0**：每个应用实例的数据库完全独立，确保数据隔离性与安全性。
- **多空间**：在单一应用实例中，通过逻辑隔离实现多个独立的数据空间。

### 历史记录

引入了数据表记录变更历史追踪功能，让你可以轻松追溯数据变更历史。

[了解历史记录功能](#)

## 插件 2.0 支持情况

### 不再维护开源版多应用管理插件

`@nocobase/plugin-multi-app-manager` 插件是基于共享进程方式实现的多应用管理，所有应用都在同一个进程中运行，这可能导致不同应用间互相阻塞。因此，不推荐在生产环境中使用该插件。代替方案，可以单独部署使用。

### 移动端新方案

尽管 NocoBase 2.0 已对桌面端进行了全面升级，移动端仍然基于 1.x 版本。未来，我们将推出新的移动端方案，敬请期待。

[查看更多插件 2.0 支持情况](https://develop.v2.docs.nocobase.com/cn/plugins)

## 升级与迁移指南

- **无代码用户**：NocoBase 1.x 与 2.0 完全兼容，升级后菜单配置入口会多出来一个「页面 v2」。
- **插件开发者**：前端架构经历了大幅变动，虽然会继续支持 1.x 的 API，但推荐使用新的开发方式以充分利用 2.0 的新特性。

更多详情请查看 [插件升级指南](https://develop.v2.docs.nocobase.com/cn/plugin-development/server/upgrade-1-to-2)
