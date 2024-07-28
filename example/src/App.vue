<script setup lang="ts">
import { ref, reactive } from "vue";
import ElTableTreeDnd, { TableColumn, TableRefExpose } from "el-table-tree-dnd";

import { trees } from "./constants";

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

const onNodeDrop = (newTreeData: any[]) => {
  console.log("onNodeDrop");
  data.value = newTreeData || [];
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
    @selection-change="onSelectionChange"
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
