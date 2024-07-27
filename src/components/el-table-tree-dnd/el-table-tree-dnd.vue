<script setup lang="ts">
import { watchEffect } from "vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  type Instruction,
  extractInstruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import ElTableTreeItemDnd from "./el-table-tree-item-dnd.vue";
import { updateTree } from "./utils";
import "./table-tree-item-dnd.css";
import { Recordable, TableColumn } from "./types";

interface Props {
  data?: Recordable[];
  // 表头
  columns?: TableColumn[];
  rowKey?: string;
  defaultExpandAll?: boolean;
  lazy?: boolean;
  treeProps?: { hasChildren?: string; children?: string; label?: string };
  showOverflowTooltip?: boolean;
  align?: "left" | "center" | "right";
  headerAlign?: "left" | "center" | "right";
}

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  columns: () => [],
  rowKey: "id",
  defaultExpandAll: true,
  lazy: false,
  treeProps: () => ({
    hasChildren: "hasChildren",
    children: "children",
    label: "label",
  }),
  showOverflowTooltip: true,
  align: "left",
  headerAlign: "left",
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
            updateTree(props.data, {
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
      :row-key="props.rowKey"
      border
      :default-expand-all="props.defaultExpandAll"
      :lazy="props.lazy"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        v-for="(column, index) in props.columns"
        :key="`${column.field}-${index}`"
        :showOverflowTooltip="props.showOverflowTooltip"
        :align="props.align"
        :headerAlign="props.headerAlign"
        :prop="column.field"
        :label="column.label"
      >
        <template v-if="column?.slots?.header" #header>
          <slot :name="column?.slots?.header"></slot>
        </template>
        <template #default="scope">
          <el-table-tree-item-dnd
            :item="{
              id: scope?.row?.id,
              index: scope?.$index,
              level: scope?.column?.level,
              value: scope?.row,
              hasChildren: !!scope?.row?.children?.length,
            }"
            :column="column"
          >
            <template v-if="column?.slots?.default" #[column?.slots?.default]>
              <slot
                :name="column?.slots?.default"
                :row="scope?.row"
                column="column"
                :$index="scope?.$index"
              ></slot>
            </template>
          </el-table-tree-item-dnd>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
