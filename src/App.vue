<script setup lang="ts">
import { ref, reactive } from "vue";
import ElTableTreeDnd from "./components/el-table-tree-dnd/el-table-tree-dnd.vue";
import { TableColumn } from "./components/el-table-tree-dnd/types";

import { trees } from "./constants";

const data = ref(trees);

const onDrop = (newTreeData: any[]) => {
  data.value = newTreeData || [];
};

const columns = reactive<TableColumn[]>([
  {
    field: "title",
    label: "标题",
    formatter: ({ row }) => {
      return row.title;
    },
  },
  {
    field: "state",
    label: "状态",
    slots: {
      default: "state",
      header:'stateHeader'
    },
  },
]);
</script>
<template>
  <el-table-tree-dnd :data="data" :columns="columns" @drop="onDrop">
    <template #stateHeader> 状态标题 </template>
    <template #state="{ row }"> 状态:{{ row.state }} </template>
  </el-table-tree-dnd>
</template>
