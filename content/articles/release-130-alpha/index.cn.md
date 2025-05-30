## 新特性

### 区块插件：工作台区块

![20240612221218](https://static-docs.nocobase.com/20240612221218.png)

参考文档：

- [工作台区块](/handbook/block-workbench)

### 筛选区块插件：树区块（商业插件）

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240607144133_rec_.mp4" type="video/mp4">
</video>

参考文档：

- [区块 - 筛选区块 - 树](/handbook/block-tree)

### 操作插件：二维码扫码操作

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

参考文档：

- [二维码扫码操作](/handbook/action-qr-scan)

### 认证插件：钉钉（商业插件）

![](https://static-docs.nocobase.com/202406120016896.png)

参考文档：

- [用户认证 - 钉钉](https://docs-cn.nocobase.com/handbook/auth-dingtalk)

## 优化

### 初次渲染时，筛选表单如果有默认值自动触发筛选（<a href="https://github.com/nocobase/nocobase/pull/4622" target="_blank">#4622</a>）

![20240611192202](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240611192202.gif)

参考文档：

- [表单筛选区块](https://docs-cn.nocobase.com/handbook/ui/blocks/filter-blocks/form#%E7%BB%99%E5%AD%97%E6%AE%B5%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E5%80%BC)

### Markdown 支持变量

![](https://static-docs.nocobase.com/20240612205857.png)

参考文档：

- [配置界面 / 变量](/handbook/ui/variables)

### Markdown 支持使用二维码标签

Markdown 里支持配置二维码，可以结合变量使用。

```html
<qr-code value="https://www.nocobase.com/" type="svg"></qr-code>
```

参考文档：

- [Markdown 区块](/handbook/ui/blocks/other-blocks/markdown)

### 工作流：新增、更新节点字段赋值优化（<a href="https://github.com/nocobase/nocobase/pull/4546" target="_blank">#4546</a>）

![20240612225415](https://static-docs.nocobase.com/20240612225415.png)

### 优化打开弹窗时候的 URL（<a href="https://github.com/nocobase/nocobase/pull/4706" target="_blank">4706</a>）

打开弹窗的时候浏览器的 URL 会跟着改变，此时如果刷新浏览器弹窗也不会被关闭。

![11e6293b407e630708ebd1ce99ee35c5.gif](https://static-docs.nocobase.com/11e6293b407e630708ebd1ce99ee35c5.gif)

### 其他

- 工作流：允许条件节点中的运算元和表达式选择变量时使用变量的中间路径（<a href="https://github.com/nocobase/nocobase/pull/4571" target="_blank">#4571</a>）
- 数据可视化：支持在图表 JSON 配置中使用 <a href="https://json5.org/" target="_blank">JSON5</a> 语法。（<a href="https://github.com/nocobase/nocobase/pull/4668" target="_blank">#4668</a>）

## 修复

### xxx（<a href="" target="_blank">#</a>）

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### 其它

- 修复因使用变量给关系字段设置默认值而导致的保存报错的问题。（<a href="https://github.com/nocobase/nocobase/pull/4590" target="_blank">#4590</a>）
- 修复筛选表单中没有默认值却依然触发自动筛选动作的问题。（<a href="https://github.com/nocobase/nocobase/pull/4627" target="_blank">#4627</a>）
- 修复变量组件中当变量文本超长时文字溢出的问题（<a href="https://github.com/nocobase/nocobase/pull/4605" target="_blank">#4605</a>）
- 修复变量懒加载中使用错误的 sourceKey 的问题。（<a href="https://github.com/nocobase/nocobase/pull/4691" target="_blank">#4691</a>）
- 复制操作：修复点击后报错的问题。（<a href="https://github.com/nocobase/nocobase/pull/4658" target="_blank">#4658</a>）
- 工作流：修复流程中无法选择数据表的 ID 字段作为变量的问题。（<a href="https://github.com/nocobase/nocobase/pull/4567" target="_blank">#4567</a>）
- 工作流：修复审批配置的界面中本地附件显示路径错误的问题。
- 数据可视化：修复图表 JSON 配置不能保存 JS 表达式的问题。
- 数据可视化：修复图表自定义筛选字段不生效的问题。（<a href="https://github.com/nocobase/nocobase/pull/4671" target="_blank">#4671</a>）
- 导入：修复多对多关联数据为空、配置导入说明时无法导入的问题。 (<a href="https://github.com/nocobase/nocobase/pull/4623">#4623</a>)
- 导入：增加关系字段、选项字段的导入数据验证。 (<a href="https://github.com/nocobase/nocobase/pull/4643">#4643</a>)
- 导入：调整重置自增序列逻辑，当用户未导入自增主键字段时不再执行。(<a href="https://github.com/nocobase/nocobase/pull/4631">#4631</a
