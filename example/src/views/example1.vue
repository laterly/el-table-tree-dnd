<template>
  <el-table-tree-dnd
    ref="tableRef"
    :data="departments"
    :columns="columns"
    :loading="loading"
    @node-drop="onNodeDrop"
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

const loading = ref(false);

const tableRef = ref<TableRefExpose>();

const columns = ref<TableColumn<Department>[]>([
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
        page: 1,
        pageSize: 20,
      },
    });
    loading.value = false;
    departments.value = response.data?.data?.list;
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

const onNodeDrop = ({ newNodeData }) => {
  departments.value = newNodeData || [];
};
</script>
