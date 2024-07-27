<script setup lang="ts">
import { watchEffect, ref, nextTick, computed, watch } from "vue";
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import {
  type Instruction,
  extractInstruction,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/tree-item";
import ElTableTreeItemDnd from "./el-table-tree-item-dnd.vue";
import { updateTree } from "./utils";
import {
  Recordable,
  TableColumn,
  ElTableRef,
  TableRefExpose,
  Pagination,
} from "./types";

interface DNDProps {
  draggable?: boolean; // 是否开启拖拽节点功能
}

interface TableProps {
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
  pageSize?: number;
  currentPage?: number;
  // 是否展示分页
  pagination?: Pagination;
  loading?: boolean;
  emptyText?: string;
}

type Props = DNDProps & TableProps;

const props = withDefaults(defineProps<Props>(), {
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
  pageSize: 20,
  currentPage: 1,
  emptyText: "暂无数据",
  loading: false,
});

interface EmitsDNDProps {
  (e: "node-drop", data: Recordable[]): void; // 拖拽成功完成时触发的事件
  (e: "node-drag-start"): void; // 节点开始拖拽时触发的事件
}

interface EmitsTableProps {
  (e: "selection-change", data: Recordable[]): void; // 改变selection
  (e: "update:pageSize", num: number): void;
  (e: "update:currentPage", num: number): void;
}

type EmitsProps = EmitsDNDProps & EmitsTableProps;

const emits = defineEmits<EmitsProps>();

const tableRef = ref<ElTableRef>();

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

          emits("node-drop", treesData);
        }
      },
    })
  );

  onCleanup(() => {
    dndCleanup();
  });
});

const pageSize = ref(20);
const currentPage = ref(1);
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
    props.pagination
  );
});

watch(
  () => props.pageSize,
  (val: number) => {
    pageSize.value = val;
  }
);

watch(
  () => props.currentPage,
  (val: number) => {
    currentPage.value = val;
  }
);

defineExpose<TableRefExpose>({
  getElTableExpose: async () => {
    await nextTick();
    return tableRef?.value!;
  },
});
</script>
<template>
  <div class="el-table-tree-dnd">
    <el-table
      ref="tableRef"
      :data="props.data"
      :row-key="props.rowKey"
      border
      :default-expand-all="props.defaultExpandAll"
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
        :showOverflowTooltip="props.showOverflowTooltip"
        :align="props.align"
        :headerAlign="props.headerAlign"
        :prop="column.prop"
        :label="column.label"
        :type="column.type"
        :reserve-selection="column.reserveSelection"
        :selectable="column.selectable"
        :fixed="column.fixed"
        :width="
          column.type === 'selection'
            ? column.width || 50
            : column.type === 'index'
            ? column.width || 65
            : column.width
        "
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
              level: scope?.column?.level,
              value: scope?.row,
              hasChildren: !!scope?.row?.children?.length,
            }"
            :column="column"
            @node-drag-start="
              () => {
                emits('node-drag-start');
              }
            "
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
      v-model:page-size="pageSize"
      v-model:current-page="currentPage"
      v-bind="pagination"
      @size-change="
        (val) => {
          emits('update:pageSize', val);
        }
      "
      @current-change="
        (val) => {
          emits('update:currentPage', val);
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
