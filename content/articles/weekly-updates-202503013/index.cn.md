汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**本周我们发布了 [NocoBase 1.6.0 版本](https://www.nocobase.com/cn/blog/nocobase-1-6-0)，带来集群模式部署、安全策略优化和迁移管理等多项新特性。**

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/cn/blog/v1.5.21)

*发布时间：2025-03-05*

#### 🚀 优化

- **[工作流]** 后置节点结果加载以提升执行记录画布性能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[工作流：聚合查询节点]** 对聚合后的数字进行小数四舍五入的处理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 子表单隐藏字段标题时字段组件与主表单中的组件未对齐 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 数据表继承模型中关系区块在弹窗中未显示 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 修复创建文件表时的报错 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[工作流]** 修复加载节点结果的权限问题 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

### [v1.5.22](https://www.nocobase.com/cn/blog/v1.5.22)

*发布时间：2025-03-06*

#### 🚀 优化

- **[client]** 按钮添加防双击处理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

#### 🐛 修复

- **[database]** 修复当关系字段的源表标识字段值为数字型字符串时，获取关系数据记录报错的问题 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

### [v1.5.23](https://www.nocobase.com/cn/blog/v1.5.23)

*发布时间：2025-03-06*

#### 🐛 修复

- **[client]**
  - 日期组件缺陷，选择的日期时间会少一个小时 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 继承父表的字段在表格中缺少排序设置项 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

### [v1.5.24](https://www.nocobase.com/cn/blog/v1.5.24)

*发布时间：2025-03-07*

#### 🎉 新特性

- **[数据可视化]** 支持在图表查询中设置 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

#### 🚀 优化

- **[工作流]** 支持在数据表事件中不触发工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

#### 🐛 修复

- **[操作：导入记录 Pro]** 使用额外的选项来觉得是否在导入时触发工作流的数据表事件 by @mytharcher
- **[操作：导出记录 Pro]** pro 导出按钮导出数据时缺失sort 参数 by @katherinehhh

### [v1.5.25](https://www.nocobase.com/cn/blog/v1.5.25)

*发布时间：2025-03-09*

#### 🐛 修复

- **[server]** `yarn start` 启动服务器后前端缓存未刷新 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[工作流：审批]** 避免错误的审批人配置导致查询出全部用户 by @mytharcher
- **[企业微信]** 修复登录提示链接和钉钉登录错误 by @chenzhizdt

### [v1.6.1](https://www.nocobase.com/cn/blog/v1.6.1)

*发布时间：2025-03-11*

#### 🐛 修复

- **[client]**

  - 使用“$anyOf”操作符时，联动规则无效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 使用链接按钮打开的弹窗，数据不更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
  - 子表格删除记录的时候多选字段值错误且选项缺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
- **[通知：站内信]** 在站内信列表中，将背景颜色与消息卡片的颜色区分开，以提升视觉层次感和可读性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/cn/blog/v1.6.0-beta.17)

*发布时间：2025-03-07*

#### 🎉 新特性

- **[client]** 给菜单项和表格表头添加提示信息配置 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
- **[数据可视化]** 支持在图表查询中设置 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI 集成]** 新插件：AI 集成 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)
- **[AI 集成 (企业版)]** 新插件：AI 集成（企业版） by @2013xile
  参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)

#### 🚀 优化

- **[client]**

  - 按钮添加防双击处理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - 菜单改为可自适应屏幕宽度 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[工作流]** 支持在数据表事件中不触发工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
- **[工作流：聚合查询节点]** 对聚合后的数字进行小数四舍五入的处理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[操作：导入记录 Pro]** Pro 导入按钮改进 by @katherinehhh
- **[工作流：JavaScript 节点]** 支持使用绝对路径引入包 by @mytharcher
- **[文件存储：S3 (Pro)]** 如果找不到存储时重新加载一次 by @jiannx

#### 🐛 修复

- **[client]**

  - 菜单标题的自定义翻译无效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - 日期组件缺陷，选择的日期时间会少一个小时 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 继承父表的字段在表格中缺少排序设置项 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - 附件字段存储空间设置下拉不显示选项 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - 子表单隐藏字段标题时字段组件与主表单中的组件未对齐 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 数据表继承模型中关系区块在弹窗中未显示 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 页面开启标签页时区块全高出现滚动条 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - 修复创建文件表时的报错 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[database]** 修复当关系字段的源表标识字段值为数字型字符串时，获取关系数据记录报错的问题 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB 客户端]**

  - 在路由管理表格中添加 tab 页面不生效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
  - 在路由表中添加一个页面后，页面显示空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
- **[用户]**

  - 没有用户管理权限的用户访问自己的个人资料时提示无权限 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - 在用户管理里更新系统设置时出现 "No permissions" 报错 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
- **[权限控制]** 权限管理表格中，tab 页的名称为空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[AI 集成]** LLM 服务默认 `baseURL` 为空的问题 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[工作流]** 修复加载节点结果的权限问题 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[工作流：自定义操作事件]** 修复语言并在执行后禁用数据表的修改 by @mytharcher
- **[操作：导入记录 Pro]** 使用额外的选项来觉得是否在导入时触发工作流的数据表事件 by @mytharcher
- **[操作：导出记录 Pro]** pro 导出按钮导出数据时缺失sort 参数 by @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/cn/blog/v1.6.0-beta.18)

*发布时间：2025-03-10*

#### 🚀 优化

- **[认证：API 密钥]** 为 API key 验证增加 token 配置测试用例。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

#### 🐛 修复

- **[server]** `yarn start` 启动服务器后前端缓存未刷新 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[auth]** 用户不存在时返回 401 错误并更新本地化信息。 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[WEB 客户端]** 切换角色后页面显示空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[主题编辑器]** 主题连续切换多次后切换失败的问题 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[工作流：审批]**

  - 修复加签时的顺序参数 by @mytharcher
  - 避免错误的审批人配置导致查询出全部用户 by @mytharcher
- **[企业微信]** 修复登录提示链接和钉钉登录错误 by @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/cn/blog/v1.7.0-beta.1)

*发布时间：2025-03-11*

#### 🎉 新特性

- **[client]** 兼容历史按钮配置按钮权限 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[工作流：操作后事件]** 支持通过结束节点决定操作的结果状态 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher
- **[工作流：响应消息]** 支持响应消息在操作后事件中使用 by @mytharcher

#### 🚀 优化

- **[工作流]** 修复未登录时 API 请求 401 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[工作流：人工处理节点]** 调整工作流待办中心界面 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher
- **[邮件管理]** 对工具栏按钮使用全局一致的元素结构与样式 by @mytharcher
- **[工作流：审批]** 调整审批待办在待办中心的界面 by @mytharcher

#### 🐛 修复

- **[client]**

  - 无法将页面移动到分组中 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深层级的菜单没有显示图标 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
  - FormDrawer 缺失主题上下文 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
- **[工作流：人工处理节点]** 避免唯一键冲突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[数据源管理]** 外部数据源点击字段编辑报错 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[用户认证]** 无角色用户需重定向至错误信息页。 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[工作流：自定义操作事件]** “触发工作流” 按钮缺失联动规则配置项 by @katherinehhh
- **[备份管理器]** 未备份还原加密 key 数据 by @gchust
- **[工作流：审批]** 避免唯一键冲突 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/cn/blog/v1.6.0-alpha.30)

*发布时间：2025-03-07*

#### 🎉 新特性

- **[client]**

  - 给菜单项和表格表头添加提示信息配置 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
  - 时间字段支持格式化 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh
- **[数据可视化]** 支持在图表查询中设置 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI 集成]** 新插件：AI 集成 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)
- **[验证]** 支持用户绑定不同的身份验证类型，如短信、TOTP 认证器等，并在必要的场景下验证身份。支持开发和扩展身份验证方式。 ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  参考文档：[验证](https://docs-cn.nocobase.com/handbook/verification)
- **[AI 集成 (企业版)]** 新插件：AI 集成（企业版） by @2013xile
  参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)
- **[双因素身份认证 (2FA)]** 新插件：双因素身份认证（2FA）和验证：TOTP 认证器 by @2013xile
  参考文档：[双因素身份认证 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[验证：TOTP 认证器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 优化

- **[client]**

  - 按钮添加防双击处理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - 菜单改为可自适应屏幕宽度 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[server]** 更新 koa 至 2.15.4；更新 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[工作流]**

  - 支持在数据表事件中不触发工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
  - 后置节点结果加载以提升执行记录画布性能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[区块：模板]** 支持从页面数据区块直接另存为区块模板 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[工作流：聚合查询节点]** 对聚合后的数字进行小数四舍五入的处理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[操作：导入记录 Pro]** Pro 导入按钮改进 by @katherinehhh
- **[工作流：JavaScript 节点]** 支持使用绝对路径引入包 by @mytharcher
- **[文件存储：S3 (Pro)]** 如果找不到存储时重新加载一次 by @jiannx

#### 🐛 修复

- **[client]**

  - 菜单标题的自定义翻译无效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - 继承父表的字段在表格中缺少排序设置项 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - 时间字段在筛选表单中格式化异常 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - 日期组件缺陷，选择的日期时间会少一个小时 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 附件字段存储空间设置下拉不显示选项 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - 子表单隐藏字段标题时字段组件与主表单中的组件未对齐 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 修复创建文件表时的报错 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
  - 页面开启标签页时区块全高出现滚动条 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 数据表继承模型中关系区块在弹窗中未显示 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 关系字段阅读模式下hover时出现新增按钮 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[auth]** 在 WebSocket 授权过程中避免刷新令牌。 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[database]** 修复当关系字段的源表标识字段值为数字型字符串时，获取关系数据记录报错的问题 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB 客户端]**

  - 在路由表中添加一个页面后，页面显示空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
  - 在路由管理表格中添加 tab 页面不生效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
- **[权限控制]** 权限管理表格中，tab 页的名称为空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[用户]**

  - 没有用户管理权限的用户访问自己的个人资料时提示无权限 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - 在用户管理里更新系统设置时出现 "No permissions" 报错 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
  - 用户权限管理表格在首次加载页面时，有一个报错的 UI 一闪而过 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[AI 集成]** LLM 服务默认 `baseURL` 为空的问题 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[工作流]** 修复加载节点结果的权限问题 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[区块：地图]** 地图字段不显示配置项 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[移动端]** 页面报错：Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[区块：操作面板]** 设置操作面板的高度无效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[工作流：自定义操作事件]**

  - 修复语言并在执行后禁用数据表的修改 by @mytharcher
  - 修复自定义操作事件已绑定工作流的旧按钮的迁移脚本 by @mytharcher
- **[自定义品牌]** 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon by @zhangzhonghe
- **[操作：导入记录 Pro]**

  - 使用额外的选项来觉得是否在导入时触发工作流的数据表事件 by @mytharcher
  - 关系区块导入按钮的识别重复记录依据字段下拉无内容 by @katherinehhh
- **[操作：导出记录 Pro]**

  - pro 导出按钮导出数据时缺失sort 参数 by @katherinehhh
  - 导出附件按钮setting多了添加区块 by @katherinehhh
- **[模板打印]** 模板打印插件和备份管理器插件都开启时，无法上传本地备份还原应用 by @gchust
- **[工作流：审批]**

  - 修复旧区块的迁移脚本 by @mytharcher
  - 修复 `.toJSON()` 导致的错误 by @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/cn/blog/v1.6.0-alpha.31)

*发布时间：2025-03-11*

#### 🎉 新特性

- **[client]** 兼容历史按钮配置按钮权限 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[工作流：响应消息]** 支持响应消息在操作后事件中使用 by @mytharcher

#### 🚀 优化

- **[认证：API 密钥]** 为 API key 验证增加 token 配置测试用例。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66
- **[工作流：人工处理节点]** 调整工作流待办中心界面 ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

#### 🐛 修复

- **[server]** `yarn start` 启动服务器后前端缓存未刷新 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[client]**

  - FormDrawer 缺失主题上下文 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
  - 使用“$anyOf”操作符时，联动规则无效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
- **[auth]** 用户不存在时返回 401 错误并更新本地化信息。 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[区块：模板]** 页面数据区块另存为模板菜单不显示 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
- **[工作流：人工处理节点]** 避免唯一键冲突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[数据源管理]** 外部数据源点击字段编辑报错 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[主题编辑器]** 主题连续切换多次后切换失败的问题 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[WEB 客户端]** 切换角色后页面显示空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[工作流：审批]**

  - 避免错误的审批人配置导致查询出全部用户 by @mytharcher
  - 修复加签时的顺序参数 by @mytharcher
- **[企业微信]** 修复登录提示链接和钉钉登录错误 by @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/cn/blog/v1.7.0-alpha.1)

*发布时间：2025-03-11*

#### 🎉 新特性

- **[工作流：操作后事件]** 支持通过结束节点决定操作的结果状态 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

#### 🚀 优化

- **[工作流]** 修复未登录时 API 请求 401 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[邮件管理]** 对工具栏按钮使用全局一致的元素结构与样式 by @mytharcher
- **[工作流：审批]** 调整审批待办在待办中心的界面 by @mytharcher

#### 🐛 修复

- **[client]**

  - 无法将页面移动到分组中 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深层级的菜单没有显示图标 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
- **[用户认证]** 无角色用户需重定向至错误信息页。 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[工作流：自定义操作事件]** “触发工作流” 按钮缺失联动规则配置项 by @katherinehhh
- **[备份管理器]** 未备份还原加密 key 数据 by @gchust
- **[工作流：审批]** 避免唯一键冲突 by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
