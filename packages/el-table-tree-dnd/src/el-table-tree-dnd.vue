<script setup lang="ts">
import { watchEffect, ref, nextTick, computed, toRaw, withDefaults } from "vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  type Instruction,
  extractInstruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import ElTableTreeItemDnd from "./el-table-tree-item-dnd.vue";
import { updateTree, treeHandler } from "./utils";
import {
  TableProps,
  EmitsDNDProps,
  TableEmitsProps,
  ElTableRef,
  TableRefExpose,
} from "./types";

const props = withDefaults(defineProps<TableProps<any>>(), {
  draggable: true,
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
  pageSize: 10,
  currentPage: 1,
  loading: false,
  border: true,
});

const emits = defineEmits<TableEmitsProps<any>>();

const tableRef = ref<ElTableRef>();

const expandItem = (row: any) => {
  tableRef.value?.toggleRowExpansion(row, true);
};

const closeItem = (row: any) => {
  tableRef.value?.toggleRowExpansion(row, false);
};

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

          const dropData = treeHandler.find(toRaw(props.data), targetId);

          emits("node-drop", {
            newNodeData: treesData,
            oldNodeData: toRaw(props.data),
            dragSource: source.data!,
            dropTarget: dropData!,
          });
        }
      },
    })
  );

  onCleanup(() => {
    dndCleanup();
  });
});

const handleNodeDragStart = (source) => {
  emits("node-drag-start", { dragSource: source });
};

const handleNodeDrag = (
  source,
  target,
  type: "enter" | "leave" | "over" | "end"
) => {
  const dropData = treeHandler.find(toRaw(props.data), target?.id);
  emits(`node-drag-${type}` as keyof EmitsDNDProps<any>, {
    dragSource: source!,
    dropTarget: dropData!,
  });
};

const pagination = computed(() => {
  return Object.assign(
    {
      small: false,
      background: false,
      pagerCount: 7,
      layout: "sizes, prev, pager, next, jumper, ->, total",
      pageSizes: [10, 20, 30, 40, 50, 100],
      disabled: false,
      hideOnSinglePage: false,
      total: 10,
    },
    props?.pagination || {}
  );
});

defineExpose<TableRefExpose>({
  getElTableExpose: async () => {
    await nextTick();
    return tableRef?.value!;
  }
});
</script>
<template>
  <div class="el-table-tree-dnd">
    <el-table
      ref="tableRef"
      v-loading="props.loading"
      :data="props.data"
      :row-key="props.rowKey"
      :border="props.border"
      :default-expand-all="props.defaultExpandAll"
      :showOverflowTooltip="props.showOverflowTooltip"
      :lazy="props.lazy"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      @selection-change="
        (e) => {
          emits('selection-change', e);
        }
      "
    >
      <el-table-column
        v-for="(column, index) in props.columns"
        :key="`${'table-column'}-${index}`"
        :align="column.align"
        :headerAlign="column.headerAlign"
        :prop="column?.prop"
        :label="column.label"
        :type="column.type"
        :reserve-selection="column.reserveSelection"
        :selectable="column.selectable"
        :fixed="column.fixed"
        :width="column.width"
        v-bind="column"
      >
        <template v-if="column?.slots?.header" #header>
          <slot :name="column?.slots?.header"></slot>
        </template>
        <template
          v-if="
            column.type !== 'selection' &&
            column.type !== 'index' &&
            props.draggable
          "
          #default="scope"
        >
          <el-table-tree-item-dnd
            :item="{
              id: scope?.row?.id,
              index: scope?.$index,
              level: scope?.treeNode?.level,
              value: scope?.row,
              hasChildren: !!scope?.row?.children?.length,
            }"
            :column="column"
            :expand-item="expandItem"
            :close-item="closeItem"
            @node-drag-start="handleNodeDragStart"
            @node-drag-enter="
              (source, target) => {
                handleNodeDrag(source, target, 'enter');
              }
            "
            @node-drag-leave="
              (source, target) => {
                handleNodeDrag(source, target, 'leave');
              }
            "
            @node-drag-over="
              (source, target) => {
                handleNodeDrag(source, target, 'over');
              }
            "
            @node-drag-end="
              (source, target) => {
                handleNodeDrag(source, target, 'end');
              }
            "
            :allow-drag="props?.allowDrag"
            :allow-drop="props?.allowDrop"
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
        <template
          v-if="!props.draggable && column?.slots?.default"
          #default="scope"
        >
          <slot
            :name="column?.slots?.default"
            :row="scope?.row"
            column="column"
            :$index="scope?.$index"
          ></slot>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-if="props.pagination"
      v-bind="pagination"
      @size-change="
        (val) => {
          emits('size-change', val);
        }
      "
      @current-change="
        (val) => {
          emits('current-change', val);
        }
      "
      style="margin-top: 10px"
    ></el-pagination>
  </div>
</template>

<style lang="css" scoped>
:deep(.el-table .el-table__cell) {
  position: static;
}
:deep(.el-table tr) {
  position: relative;
}
</style>
