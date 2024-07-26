export const trees = [
  {
    title: "composables",
    icon: "lucide:folder",
    id: "1",
    children: [
      {
        id: "1-1",
        title: "useAuth.ts",
        icon: "vscode-icons:file-type-typescript",
      },
      {
        id: "1-2",
        title: "useUser.ts",
        icon: "vscode-icons:file-type-typescript",
      },
    ],
  },
  {
    title: "components",
    icon: "lucide:folder",
    id: "2",
    children: [
      {
        id: "2-1",
        title: "Home",
        icon: "lucide:folder",
        children: [
          {
            id: "2-1-1",
            title: "Card.vue",
            icon: "vscode-icons:file-type-vue",
          },
          {
            id: "2-1-2",
            title: "Button.vue",
            icon: "vscode-icons:file-type-vue",
          },
        ],
      },
    ],
  },
  { id: "3", title: "app.vue", icon: "vscode-icons:file-type-vue" },
  {
    id: "4",
    title: "nuxt.config.ts",
    icon: "vscode-icons:file-type-nuxt",
  },
];
