## New features

### 区块插件：工作台区块

![20240612221218](https://static-docs.nocobase.com/20240612221218.png)

参考文档：

- [工作台区块](/handbook/block-workbench)

### Filter Block Plugin：Tree（Commercial plugin）

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240607144133_rec_.mp4" type="video/mp4">
</video>

Reference:

- [Block - Filter Block - Tree](/handbook/block-tree)

### 操作插件：二维码扫码操作

<video width="100%" controls>
  <source src="https://static-docs.nocobase.com/20240612214013_rec_.mp4" type="video/mp4">
</video>

参考文档：

- [二维码扫码操作](/handbook/action-qr-scan)

### Auth: DingTalk（Commercial plugin）

![](https://static-docs.nocobase.com/202406120016896.png)

Reference:

- [Authentication - DingTalk](https://docs.nocobase.com/handbook/auth-dingtalk)

## Improvements

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

### Workflow: Improvements to configuration of assign values in create/update node (<a href="https://github.com/nocobase/nocobase/pull/4546" target="_blank">#4546</a>)

![20240612225415](https://static-docs.nocobase.com/20240612225415.png)

### Optimize the URL when opening a popup window (<a href="https://github.com/nocobase/nocobase/pull/4706" target="_blank">4706</a>)

When opening a popup window, the URL of the browser will also change. If the browser is refreshed at this time, the popup window will not be closed.

![11e6293b407e630708ebd1ce99ee35c5.gif](https://static-docs.nocobase.com/11e6293b407e630708ebd1ce99ee35c5.gif)

### Others

- Workflow: allow to select any path of a variable in condition node (<a href="https://github.com/nocobase/nocobase/pull/4571" target="_blank">#4571</a>)
- Data visualization：Allows to use <a href="https://json5.org/" target="_blank">JSON5</a> syntax in chart json config.（<a href="https://github.com/nocobase/nocobase/pull/4668" target="_blank">#4668</a>）

## Bug fixes

### xxx (<a href="" target="_blank">#</a>)

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

Reference document:

- []()

### Others

- Fix an issue where saving would result in an error due to setting default values for association fields using variables. (<a href="https://github.com/nocobase/nocobase/pull/4590" target="_blank">#4590</a>)
- Fix an issue where the filter form would still trigger automatic filtering even when it didn't have a default value. (<a href="https://github.com/nocobase/nocobase/pull/4627" target="_blank">#4627</a>)
- Fix the issue where text overflows when the variable text is too long in the variable component (<a href="https://github.com/nocobase/nocobase/pull/4605" target="_blank">#4605</a>)
- Fix the issue of using the wrong sourceKey in lazy loading of variables. (<a href="https://github.com/nocobase/nocobase/pull/4691" target="_blank">#4691</a>)
- Duplicate: Fix the issue of error occurring after clicking. (<a href="https://github.com/nocobase/nocobase/pull/4658" target="_blank">#4658</a>)
- Workflow: Fix the issue where the ID field of collections cannot be selected as a variable in the workflow (<a href="https://github.com/nocobase/nocobase/pull/4567" target="_blank">#4567</a>)
- Workflow: Fix the issue where the local attachment display path is incorrect in the approval configuration interface
- Data visualization: fix the issue where JS expressions in chart json config is not saved.
- Data visualization: fix the issue where the custom filter fields is not applied when filtering. (<a href="https://github.com/nocobase/nocobase/pull/4671" target="_blank">#4671</a>)
- Import: Fixed the issue where many-to-many relationship data was empty and could not be imported when configuring explain information in import template. (<a href="https://github.com/nocobase/nocobase/pull/4623">#4623</a>)
- Import: Added data validation for relationship fields and option fields during import. (<a href="https://github.com/nocobase/nocobase/pull/4643">#4643</a>)
- Import: Adjusted the logic for resetting auto-increment sequence, it will no longer execute when the user does not import the auto-increment primary key field. (<a href="https://github.com/nocobase/nocobase/pull/4631">#4631</a>)
