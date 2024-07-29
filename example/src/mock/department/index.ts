// department.mock.ts
import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

export interface Department {
  departmentName: string; // 部门名字
  id: string; // 部门Id
  createTime: string; // 成立时间
  status: number; // 状态
  remark: string; // 备注
  leader: string; // 部门负责人
  phone: string; // 部门电话
  email: string; // 部门邮箱
  location: string; // 部门位置
  children: Department[];
}

export enum DepartmentPath {
  List = "/department/table/list",
  Add = "/department/table/list/add",
  Delete = "/department/table/list/delete",
}

// 生成部门数据的函数
// 假设 toAnyString 是一个函数，用于生成唯一的字符串 ID
const toAnyString = () => Mock.Random.guid();

const generateItem = () => {
  const department: Department = {
    departmentName: `部门${Mock.Random.integer(1, 100)}`,
    id: toAnyString(),
    createTime: Mock.Random.datetime(),
    status: Mock.Random.integer(0, 1),
    remark: Mock.Random.csentence(5, 50),
    leader: Mock.Random.cname(), // 随机生成部门负责人
    phone: Mock.Random.string("number", 11), // 随机生成电话号码
    email: Mock.Random.email(), // 随机生成邮箱
    location: Mock.Random.city(), // 随机生成部门位置
    children: [],
  };

  return department;
};

const generateDepartmentTree = (
  parentId: string,
  depth: number
): Department | null => {
  if (depth === 0) return null;

  const department = generateItem();

  // 递归生成子部门
  const maxChildren = Mock.Random.integer(0, 5); // 每个部门最多5个子部门
  for (let i = 0; i < maxChildren; i++) {
    const childDepartment: Department | null = generateDepartmentTree(
      department.id,
      depth - 1
    );
    if (childDepartment) {
      department.children.push(childDepartment);
    }
  }

  return department;
};

const rootDepartments: Department[] = [];
const citys = [
  "厦门总公司",
  "北京分公司",
  "上海分公司",
  "福州分公司",
  "深圳分公司",
  "杭州分公司",
  "广州分公司",
  "成都分公司",
  "武汉分公司",
  "南京分公司",
  "天津分公司",
  "重庆分公司",
  "西安分公司",
  "沈阳分公司",
  "长春分公司",
  "哈尔滨分公司",
  "济南分公司",
  "青岛分公司",
  "郑州分公司",
  "长沙分公司",
  "南昌分公司",
  "福州分公司", // 重复以测试分页逻辑
  "昆明分公司",
  "贵阳分公司",
  "南宁分公司",
  "海口分公司",
  "石家庄分公司",
  "太原分公司",
  "呼和浩特分公司",
  "银川分公司",
  "乌鲁木齐分公司",
  "西宁分公司",
  "兰州分公司",
  "银川分公司", // 重复以测试分页逻辑
  "合肥分公司",
  "杭州分公司", // 重复以测试分页逻辑
  "海口分公司", // 重复以测试分页逻辑
  "三亚分公司",
  "香港分公司",
  "澳门分公司",
];

// 生成每个分公司的部门树
citys.forEach((city) => {
  const rootDepartment = generateDepartmentTree("", 3); // 生成深度为3的部门树
  if (rootDepartment) {
    rootDepartment.departmentName = city; // 设置分公司名称
    rootDepartments.push(rootDepartment);
  }
});

// 全部部门数据
const allDepartments: Department[] = rootDepartments; // 假设我们有100个部门

// 分页函数
function paginate<T>(array: T[], page: number, pageSize: number): T[] {
  const startIndex = (page - 1) * pageSize;
  return array.slice(startIndex, startIndex + pageSize);
}

// 新增部门接口
const addDepartment = (
  parentId: string,
  newDepartment: Department
): boolean => {
  const findDepartmentAndAdd = (departments: Department[]): boolean => {
    for (let department of departments) {
      if (department.id === parentId) {
        department.children.push(newDepartment);
        return true;
      }
      // 递归查找子部门
      if (findDepartmentAndAdd(department.children)) {
        return true;
      }
    }
    return false;
  };

  return findDepartmentAndAdd(allDepartments);
};

// 删除部门接口
const deleteDepartment = (departmentId: string): boolean => {
  const deleteDepartmentRecursively = (departments: Department[]): boolean => {
    for (let i = 0; i < departments.length; i++) {
      if (departments[i].id === departmentId) {
        departments.splice(i, 1);
        return true;
      } else {
        // 递归删除子部门
        if (deleteDepartmentRecursively(departments[i].children)) {
          return true;
        }
      }
    }
    return false;
  };

  return deleteDepartmentRecursively(allDepartments);
};

export default [
  {
    url: DepartmentPath.List,
    method: "get",
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      const paginatedDepartments = paginate<Department>(
        allDepartments,
        parseInt(page as string),
        parseInt(pageSize as string)
      );
      return {
        code: 200,
        data: {
          list: paginatedDepartments,
          total: allDepartments.length,
        },
      };
    },
  },
  {
    url: DepartmentPath.Add,
    method: "post",
    response: ({ body }) => {
      let newDepartment = body as Department;
      newDepartment = generateItem();
      const { departmentId } = body;
      const newAll = addDepartment(departmentId, newDepartment);
      console.log("newAll", newAll);
      console.log("newDepartment", newDepartment);
      if (newDepartment) {
        return {
          code: 200,
          message: "部门添加成功",
          data: newDepartment,
        };
      } else {
        return {
          code: 500,
          message: "部门添加失败",
        };
      }
    },
  },
  {
    url: DepartmentPath.Delete,
    method: "post",
    response: ({ body }) => {
      const { departmentId } = body;
      if (deleteDepartment(departmentId)) {
        return {
          code: 200,
          message: "部门删除成功",
        };
      } else {
        return {
          code: 404,
          message: "未找到指定部门",
        };
      }
    },
  },
] as MockMethod[];
