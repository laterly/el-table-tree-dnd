import ElTableTreeDnd from "./el-table-tree-dnd.vue";

// 这里的名字必须和你的组件名一致
ElTableTreeDnd.install = (app) => {
  app.component(ElTableTreeDnd.name, ElTableTreeDnd);
};

export default ElTableTreeDnd;

export * from "./types";
