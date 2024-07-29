<template>
  <el-table-tree-dnd
    ref="tableRef"
    :data="departments"
    :columns="columns"
    :pagination="{
      total,
      pageSize,
      currentPage
    }"
    :loading="loading"
    :allow-drag="allowDrag"
    :allow-drop="allowDrop"
    @node-drop="onNodeDrop"
    @node-drag-start="onNodeDragStart"
    @node-drag-enter="onNodeDragEnter"
    @node-drag-leave="onNodeDragLeave"
    @node-drag-over="onNodeDragOver"
    @node-drag-end="onNodeDragEnd"
    @selection-change="onSelectionChange"
    @size-change="(val)=>{
      pageSize = val;
    }"
    @current-change="(val)=>{
      currentPage = val;
      fetchDepartments();
    }"
  >
    <template #status="{ row }">
      <el-tag :type="row.status === 1 ? 'success' : 'danger'">{{
        row.status === 1 ? "启用" : "禁用"
      }}</el-tag>
    </template>
    <template #action="{ row }">
      <el-space>
        <el-button type="primary" size="small"> 新增子部门 </el-button>
        <el-button size="small"> 修改名称 </el-button>
        <el-button type="danger" size="small"> 删除 </el-button>
      </el-space>
    </template>
  </el-table-tree-dnd>
  <el-button @click="onToggleAllSelection"> 切换选项 </el-button>
  <el-button @click="onClearSelection">清除所有选项</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import ElTableTreeDnd, {
  TableColumn,
  TableRefExpose,
} from "../../../packages/el-table-tree-dnd/src/index";
import { DepartmentPath, type Department } from "../mock/department";

const departments = ref<Department[]>([]);

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const loading = ref(false);

const columns = ref<TableColumn[]>([
  {
    prop: "departmentName",
    label: "部门",
    width: "250",
    formatter: (row) => {
      return row?.departmentName;
    },
  },
  {
    prop: "phone",
    label: "部门号码",
    width: "150",
  },
  {
    prop: "email",
    label: "部门邮箱",
    width: "200",
  },
  {
    prop: "location",
    label: "部门位置",
    width: "200",
  },
  {
    prop: "status",
    label: "状态",
    width: "90",
    slots: {
      default: "status",
    },
  },
  {
    prop: "remark",
    label: "备注",
    width: "300",
  },
  {
    prop: "createTime",
    label: "成立时间",
    width: "180",
  },
  {
    prop: "action",
    label: "操作",
    width: "260",
    fixed: "right",
    slots: {
      default: "action",
    },
  },
]);

const fetchDepartments = async () => {
  try {
    loading.value = true;
    const response = await axios.get(DepartmentPath.List, {
      params: {
        page: currentPage.value,
        pageSize: pageSize.value,
      },
    });
    loading.value = false;
    departments.value = response.data?.data?.list;
    total.value = response.data?.data?.total;
    console.log('departments',departments.value?.[0])
  } catch (error) {
    loading.value = false;
    console.error("Error fetching departments:", error);
  }
};

fetchDepartments();

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
  departments.value = nodeData || [];
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
