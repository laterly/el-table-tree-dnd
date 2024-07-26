<script setup lang="ts">
import { ref } from "vue";
import ElTableTreeDnd from "./components/el-table-tree-dnd/el-table-tree-dnd.vue";

import { trees } from "./constants";

const data = ref(trees);

const onDrop = (newTreeData: any[]) => {
  data.value = newTreeData || [];
};
</script>
<template>
  <el-table-tree-dnd :data="data" @drop="onDrop" />
</template>
