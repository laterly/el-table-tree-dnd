export const trees = [
  {
    id: 1,
    title: "节点 1",
    state:1,
    children: [
      {
        id: 2,
        title: "子节点 1-1",
        state:2,
        children: [
          {
            id: 5,
            title: "子节点 1-1-1",
            state:3,
          },
          {
            id: 6,
            title: "子节点 1-1-2",
            state:4,
          },
        ],
      },
      {
        id: 3,
        title: "子节点 1-2",
        state:5,
      },
    ],
  },
  {
    id: 4,
    title: "节点 2",
    state:9,
    children: [
      {
        id: 7,
        title: "子节点 2-1",
        state:8,
      },
      {
        id: 8,
        title: "子节点 2-2",
        state:5,
      },
    ],
  },
];
