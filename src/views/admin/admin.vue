<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
        <!--侧边栏-->
            <div style="height: 60px; display: flex; align-items: center; justify-content: center; background-color: pink; color: purple;">
                logo
            </div>

            <el-menu>
                <el-menu-item index="1">系统首页</el-menu-item>
                <el-menu-item index="2">角色管理</el-menu-item>
                <el-menu-item index="3">权限管理</el-menu-item>
                <el-menu-item index="4">系统设置</el-menu-item>
                <el-submenu>
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item>用户信息</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>


        <el-container>
            <el-header>

            </el-header>

          
            <el-main>
            <!--主内容区-->
            
            </el-main>
        </el-container>


      </el-container>
    </div>
  </template>
  
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

export default {
    name: 'Admin',
    components: {
        ElMenu,
        ElMenuItem
    },
    data() {
        return {
        
        }
    },
    
}
</script>

<style scoped lang="scss">

</style>