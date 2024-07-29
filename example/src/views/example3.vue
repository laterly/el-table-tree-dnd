<template>
  <div style="margin-bottom: 20px">
    <el-space alignment="start">
      <el-button @click="handleCurrentSelection"> 选中当前页 </el-button>
      <el-button @click="handleCancelSelection"> 取消当前页 </el-button>
      <el-button @click="handleToggleAllSelection"> 反选 </el-button>
      <el-button @click="handleClearSelection">清除所有选项</el-button>
    </el-space>
  </div>
  <el-table-tree-dnd
    ref="tableRef"
    :data="departments"
    :columns="columns"
    :pagination="{
      total,
      pageSize,
      currentPage,
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
    @size-change="
      (val) => {
        pageSize = val;
      }
    "
    @current-change="
      (val) => {
        currentPage = val;
        fetchDepartments();
      }
    "
  >
    <template #status="{ row }">
      <el-tag :type="row.status === 1 ? 'success' : 'danger'">{{
        row.status === 1 ? "启用" : "禁用"
      }}</el-tag>
    </template>
    <template #action="{ row }">
      <el-space>
        <el-button
          type="primary"
          size="small"
          @click="
            () => {
              handleAdd(row);
            }
          "
        >
          新增子部门
        </el-button>
        <el-button
          size="small"
          @click="
            () => {
              handleEdit(row);
            }
          "
        >
          修改名称
        </el-button>
        <el-popconfirm
          title="确定删除?"
          @confirm="
            () => {
              handleDelete(row);
            }
          "
        >
          <template #reference>
            <el-button type="danger" size="small"> 删除 </el-button>
          </template>
        </el-popconfirm>
      </el-space>
    </template>
  </el-table-tree-dnd>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
import ElTableTreeDnd, {
  TableColumn,
  TableRefExpose,
  treeHandler,
} from "el-table-tree-dnd";
import "el-table-tree-dnd/dist/style.css";
import { DepartmentPath, type Department } from "../mock/department";

const departments = ref<Department[]>([]);

const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const loading = ref(false);

const tableRef = ref<TableRefExpose>();

const columns = ref<TableColumn<Department>[]>([
  {
    prop: "selection",
    type: "selection",
    width: "50",
  },
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
    console.log("departments", departments.value?.[0]);
  } catch (error) {
    loading.value = false;
    console.error("Error fetching departments:", error);
  }
};

fetchDepartments();

// 新增子部门
const handleAdd = async (row: Department) => {
  const response = await axios.post(DepartmentPath.Add, {
    departmentId: row.id,
  });
  if (response?.data?.code === 200) {
    const newNodeData = treeHandler.insertChild<Department>(
      departments.value,
      row.id,
      response.data?.data
    );
    departments.value = newNodeData;
    ElMessage.success("新增子部门成功");
  }
};

// 修改名称
const handleEdit = async (row: Department) => {
  try {
    const res = await ElMessageBox.prompt(
      `修改【${row.departmentName}】的部门名字`,
      "提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }
    );
    if (res.value && res.action === "confirm") {
      row.departmentName = res.value;
      ElMessage.success("修改成功");
    }
  } catch {}
};

// 删除部门
const handleDelete = async (row: Department) => {
  const response = await axios.post(DepartmentPath.Delete, {
    departmentId: row.id,
  });
  if (response?.data?.code === 200) {
    const newNodeData = treeHandler.remove<Department>(
      departments.value,
      row.id
    );
    departments.value = newNodeData;
    ElMessage.success("删除成功");
  }
};

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

const onNodeDrop = ({ newNodeData, dragSource, dropTarget }) => {
  console.log("onNodeDrop", newNodeData);
  console.log("onNodeDrop dragSource", dragSource);
  console.log("onNodeDrop dropTarget", dropTarget);
  departments.value = newNodeData || [];
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

const handleCurrentSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  treeHandler.traverse<Department>(departments.value, (item) => {
    elTableRef?.toggleRowSelection(item, true);
  });
};

const handleCancelSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  treeHandler.traverse<Department>(departments.value, (item) => {
    elTableRef?.toggleRowSelection(item, false);
  });
};

const handleToggleAllSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  elTableRef?.toggleAllSelection();
};
const handleClearSelection = async () => {
  const elTableRef = await tableRef.value?.getElTableExpose();
  elTableRef?.clearSelection();
};

const onSelectionChange = (data) => {
  console.log("data", data);
};
</script>
