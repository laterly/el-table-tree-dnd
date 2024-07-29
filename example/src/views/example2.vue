<script setup lang="ts">
import { ref, reactive } from "vue";
import ElTableTreeDnd, {
  TableColumn,
  TableRefExpose,
} from "../../../packages/el-table-tree-dnd/src/index";

import { trees } from "../constants";

const data = ref(trees);

const columns = reactive<TableColumn[]>([
  {
    prop: "index",
    type: "index",
    label: "序号",
  },
  {
    prop: "selection",
    type: "selection",
  },
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
  },
]);

const onNodeDragStart = ({ dragSource }) => {
  console.log("开始", dragSource);
};

const onNodeDragEnter = ({ dragSource, dropTarget }) => {
  console.log("onNodeDragEnter dragSource", dragSource);
  console.log("onNodeDragEnter dropTarget", dropTarget);
};
const onNodeDragLeave = ({ dragSource, dropTarget }) => {
  console.log("onNodeDragLeave dragSource", dragSource);
  console.log("onNodeDragLeave dropTarget", dropTarget);
};

const onNodeDragOver = ({ dragSource, dropTarget }) => {
  console.log("onNodeDragOver dragSource", dragSource);
  console.log("onNodeDragOver dropTarget", dropTarget);
};

const onNodeDragEnd = ({ dragSource, dropTarget }) => {
  console.log("onNodeDragEnd dragSource", dragSource);
  console.log("onNodeDragEnd dropTarget", dropTarget);
};

const onNodeDrop = ({ nodeData, dragSource, dropTarget }) => {
  console.log("onNodeDrop", nodeData);
  console.log("onNodeDrop dragSource", dragSource);
  console.log("onNodeDrop dropTarget", dropTarget);
  data.value = nodeData || [];
};

const allowDrag = ({ dragSource }) => {
  console.log("allowDrag dragSource", dragSource);
  if (dragSource?.title === "子节点 2-1") {
    return false;
  }
  return true;
};

const allowDrop = ({ dragSource, dropTarget }) => {
  console.log("allowDrop dragSource", dragSource);
  console.log("allowDrop dropTarget", dropTarget);
  if (dropTarget?.title === "子节点 2-1") {
    console.log("进来 false");
    return false;
  }
  console.log("进来 true");
  return true;
};

const tableRef = ref<TableRefExpose>();

const onToggleAllSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  elTableRef?.toggleAllSelection();
};
const onClearSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  elTableRef?.clearSelection();
};

const onSelectionChange = (data) => {
  console.log("data", data);
};
</script>
<template>
  <el-table-tree-dnd
    ref="tableRef"
    :data="data"
    :columns="columns"
    @node-drop="onNodeDrop"
    @node-drag-start="onNodeDragStart"
    @node-drag-enter="onNodeDragEnter"
    @node-drag-leave="onNodeDragLeave"
    @node-drag-over="onNodeDragOver"
    @node-drag-end="onNodeDragEnd"
    @selection-change="onSelectionChange"
    :allow-drag="allowDrag"
    :allow-drop="allowDrop"
    :draggable="true"
    :pagination="{
      total: 30,
    }"
  >
    <template #stateHeader> 状态标题 </template>
    <template #state="{ row }"> 状态:{{ row.state }} </template>
  </el-table-tree-dnd>
  <el-button @click="onToggleAllSelection"> 切换选项 </el-button>
  <el-button @click="onClearSelection">清除所有选项</el-button>
</template>
