
# ElTableTreeDnd 组件介绍

`ElTableTreeDnd` 是一个基于 Element Plus 的 `el-table` 组件进行扩展的 Vue3 组件，它提供了树形表格的功能，并增加了拖拽节点的能力。该组件适用于需要展示层级结构数据，并且允许用户通过拖拽来调整节点顺序或层级关系的场景。
拖拽是基于 `@atlaskit/pragmatic-drag-and-drop` 库，用于提供跨浏览器的拖拽和放置功能。

## 特性

- **树形结构**: 支持多级树形数据的展示，用户可以展开或折叠节点。
- **拖拽功能**: 用户可以拖拽表格中的节点，以改变其在树形结构中的位置。
- **自定义列**: 支持自定义列内容和样式，可以定义不同的列类型，如选择框、索引等。
- **分页**: 支持表格数据的分页展示，用户可以自定义每页显示的条目数。
- **插槽**: 提供了默认插槽和表头插槽，允许用户自定义单元格内容和表头内容。
- **事件监听**: 提供了多种事件监听，如拖拽开始、拖拽成功、选择变更等，方便用户进行自定义操作。

## 使用场景

- 组织架构管理：展示公司的组织架构，并允许用户通过拖拽调整部门或员工的归属。
- 文件夹管理：在文件管理系统中，展示文件夹的层级结构，并通过拖拽进行文件或文件夹的移动。
- 分类

## 安装

```bash
npm install --save el-table-tree-dnd
```

## 引入组件
首先需要引入 ElTableTreeDnd 组件：
```js
import ElTableTreeDnd from 'el-table-tree-dnd';
```

## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| draggable | 是否开启拖拽节点功能 | boolean | true |
| data | 表格数据 | Recordable[] | [] |
| columns | 表头数据 | TableColumn[] | [] |
| rowKey | 行数据的 Key，用来优化 Table 的渲染 | string | 'id' |
| defaultExpandAll | 是否默认展开所有行 | boolean | true |
| lazy | 是否懒加载子节点数据 | boolean | false |
| treeProps | 树形数据相关配置 | { hasChildren?: string; children?: string; label?: string } | { hasChildren: 'hasChildren', children: 'children', label: 'label' } |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip | boolean | true |
| align | 表格内容对齐方式 | 'left' \| 'center' \| 'right' | 'left' |
| headerAlign | 表头对齐方式 | 'left' \| 'center' \| 'right' | 'left' |
| pageSize | 每页显示条目个数 | number | 20 |
| currentPage | 当前页码 | number | 1 |
| pagination | 分页配置 | Pagination | - |
| loading | 是否显示加载中 | boolean | false |

## columns 表头数据属性详细说明

`columns` 定义了表格列的属性，以下是每个属性的具体说明：

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop | 对应列内容的字段名 | string | - |
| label | 显示的标题 | string | - |
| type | 对应列的类型，如果设置了 `selection` 则显示多选框，如果设置了 `index` 则显示该行的索引（从 1 开始） | "index" \| "selection" | - |
| slots | 列插槽，定义了默认插槽和表头插槽的名称 | { default?: string; header?: string; } | - |
| index | 如果设置了 `type=index`，可以自定义索引的值 | number \| ((index: number) => number) | - |
| columnKey | 列的 key，如果需要使用 filter-change 事件，则需要此属性标识列 | string | - |
| width | 列宽度 | string \| number | - |
| minWidth | 列最小宽度，与 width 的区别是 width 是固定的，minWidth 是最小宽度，如果列的宽度小于 minWidth 会使用 minWidth 作为列宽度 | string \| number | - |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | boolean \| "left" \| "right" | - |
| sortMethod | 对数据进行排序的时候使用的方法，仅当 `sortable` 为 true 时有效 | (...args: any[]) => number | - |
| sortBy | 指定数据按照哪个属性进行排序，仅当 `sortable` 为 true 时有效 | string \| string[] \| ((...args: any[]) => string \| string[]) | - |
| sortOrders | 数据在排序时所使用排序策略的数组，仅当 `sortable` 为 true 时有效 | (string \| null)[] | - |
| resizable | 是否可以通过拖动改变列的宽度（需要在 el-table 上设置 border 属性为 true） | boolean | - |
| formatter | 用来格式化内容 | (row: Recordable, column: TableColumn, $index?: number) => any | - |
| showOverflowTooltip | 当内容过长被隐藏时显示 tooltip | boolean | true |
| align | 表格列内容的对齐方式 | "left" \| "center" \| "right" | "left" |
| headerAlign | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | "left" \| "center" \| "right" | - |
| className | 列的 className | string | - |
| labelClassName | 当前列标题的自定义类名 | string | - |
| selectable | 是否允许用户选择复选框 | (...args: any[]) => boolean | - |
| reserveSelection | 当用户切换分页时，保留之前页面的选择项（需设置 `row-key`） | boolean | - |
| filters | 数据过滤的选项 | Array<{ text: string; value: string }> | - |
| filterPlacement | 过滤弹出框的定位 | string | - |
| filterMultiple | 数据过滤的选项是否多选 | boolean | - |
| filterMethod | 数据过滤使用的方法 | (...args: any[]) => boolean | - |
| filteredValue | 选中的数据过滤项，如果需要异步筛选，需要自己更新这个值 | string[] | - |
| [key: string] | 其他自定义属性 | any | - |

请注意，以上属性中，部分属性（如 `sortMethod`、`sortBy`、`sortOrders`）需要与 `el-table` 的 `sortable` 属性配合使用。

## 拖拽事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| node-drop | 拖拽成功完成时触发的事件 | (nodeData: Recordable[], dragSource: Recordable, dropTarget: Recordable) |
| node-drag-start | 节点开始拖拽时触发的事件 | (dragSource: Recordable) |
| node-drag-enter | 拖拽操作进入目标元素时触发 | (dragSource: Recordable, dropTarget: Recordable) |
| node-drag-leave | 拖拽操作离开目标元素时触发 | (dragSource: Recordable, dropTarget: Recordable) |
| node-drag-over | 拖拽操作在目标元素上移动时触发 | (dragSource: Recordable, dropTarget: Recordable) |
| node-drag-end | 拖拽操作完成时触发 | (dragSource: Recordable, dropTarget: Recordable) |

## 表格事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| selection-change | 改变selection | (data: Recordable[]) |
| update:pageSize | 更新每页显示条目个数 | (num: number) |
| update:currentPage | 更新当前页码 | (num: number) |

## 插槽

| 插槽名 | 说明 | 插槽作用域参数 |
| --- | --- | --- |
| column.slots.header | 表头插槽 | - |
| column.slots.default | 列默认插槽 | { row, column, $index } |

## 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| getElTableExpose | 获取 el-table 实例，通常表格操作 | - |

## 基本使用示例

```vue
<template>
  <el-table-tree-dnd
    :data="tableData"
    :columns="columns"
    @node-drop="handleNodeDrop"
    @node-drag-start="handleNodeDragStart"
  >
    <template #stateHeader> 状态标题 </template>
    <template #state="{ row }"> 状态:{{ row.state }} </template>
  </el-table-tree-dnd>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ElTableTreeDnd,{ Recordable } from 'el-table-tree-dnd';

const tableData = ref<Recordable[]>([
  {
    id: 1,
    title: "节点 1",
    state:1,
    children: [
      {
        id: 2,
        title: "子节点 1-1",
        state:2,
        children: [
          {
            id: 5,
            title: "子节点 1-1-1",
            state:3,
          },
          {
            id: 6,
            title: "子节点 1-1-2",
            state:4,
          },
        ],
      },
      {
        id: 3,
        title: "子节点 1-2",
        state:5,
      },
    ],
  },
  {
    id: 4,
    title: "节点 2",
    state:9,
    children: [
      {
        id: 7,
        title: "子节点 2-1",
        state:8,
      },
      {
        id: 8,
        title: "子节点 2-2",
        state:5,
      },
    ],
  },
]);

const columns = ref([
  {
    prop: "title",
    label: "标题",
    formatter: (row) => {
      return row?.title;
    },
  },
  {
    prop: "state",
    label: "状态",
    slots: {
      default: "state",
      header: "stateHeader",
    },
  }
]);

const handleNodeDrop = (data: Recordable[], source: Recordable, target: Recordable) => {
  console.log('Node dropped:', data, source, target);
  tableData.value = data;
};

const handleNodeDragStart = () => {
  console.log('Node drag started');
};

</script>

<style scoped>
/* Add your styles here */
</style>

```

## 相关文档地址

[查看 @atlaskit/pragmatic-drag-and-drop GitHub 仓库](https://github.com/atlassian/pragmatic-drag-and-drop)

[查看 Element Plus 官方文档](https://element-plus.org)

