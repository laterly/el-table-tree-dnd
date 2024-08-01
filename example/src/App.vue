<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <el-container>
    <el-aside>
      <el-menu default-active="1">
        <el-menu-item
          index="1"
          @click="
            () => {
              router.push({
                path: '/example1',
              });
            }
          "
        >
          <router-link
            to="/example1"
            style="text-decoration: none; color: inherit"
          >
            <span>树拖拽</span>
          </router-link>
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="
            () => {
              router.push({
                path: '/example2',
              });
            }
          "
        >
          综合示例
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
