<template>
  <el-container>
    <el-aside>
      <el-menu default-active="1">
        <el-menu-item index="1">
          <router-link
            to="/example1"
            style="text-decoration: none; color: inherit"
          >
            <span>拖拽树</span>
          </router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link
            to="/example2"
            style="text-decoration: none; color: inherit"
            >选项勾选</router-link
          >
        </el-menu-item>
        <el-menu-item index="3">
          <router-link
            to="/example3"
            style="text-decoration: none; color: inherit"
            >综合</router-link
          >
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
