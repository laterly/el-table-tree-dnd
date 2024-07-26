<script setup lang="ts">
import { watchEffect } from "vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  type Instruction,
  extractInstruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import ElTableTreeItemDnd from "./el-table-tree-item-dnd.vue";
import { updateTree as updateTableTree } from "./tree-utils";
import "./table-tree-item-dnd.css";

interface Props {
  data?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
});

const emits = defineEmits<{
  (e: "drop", value: any[]): void;
}>();

watchEffect((onCleanup) => {
  const dndCleanup = combine(
    monitorForElements({
      onDrop(args) {
        const { location, source } = args;

        if (!location.current.dropTargets.length) return;

        const itemId = source.data.id as string;
        const target = location.current.dropTargets[0];
        const targetId = target.data.id as string;

        const instruction: Instruction | null = extractInstruction(target.data);

        if (instruction !== null) {
          const treesData =
            updateTableTree(props.data, {
              type: "instruction",
              instruction,
              itemId,
              targetId,
            }) ?? [];

          emits("drop", treesData);
        }
      },
    })
  );

  onCleanup(() => {
    dndCleanup();
  });
});
</script>
<template>
  <div>
    <el-table
      :data="props.data"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column #default="scope" label="标题">
        <el-table-tree-item-dnd
          :item="{
            id: scope?.row?.id,
            index: scope?.$index,
            level: scope?.column?.level,
            value: scope?.row,
            hasChildren: !!scope?.row?.children?.length,
          }"
        />
      </el-table-column>
    </el-table>
  </div>
</template>
