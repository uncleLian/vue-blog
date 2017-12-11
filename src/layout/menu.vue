<template>
    <my-sticky sticky-class="sticky-class">
        <el-aside id="menu" width="240px">
            <el-menu :default-active="$route.path" :router="true" :default-openeds="defaultOpeneds">
                <template v-for="(list,listIndex) in json">
                    <!-- 有子路由的 -->
                    <el-submenu v-if="list.children" :index="list.path" :key="listIndex">
                        <template slot="title">
                            <i v-if="list.icon" :class="list.icon"></i>
                            <span slot="title">{{list.name}}</span>
                        </template>
                        <el-menu-item v-for="(item,itemIndex) in list.children" :index="item.path" :key="itemIndex">
                            <i v-if="item.icon" :class="[item.icon, 'menu-icon']"></i>{{item.name}}
                        </el-menu-item>
                    </el-submenu>
                    <!-- 没有子路由的 -->
                    <el-menu-item v-else :index="list.path" :key="listIndex">
                        <i v-if="list.icon" :class="list.icon"></i>
                        <span slot="title">{{list.name}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
    </my-sticky>
</template>
<script>
import { routes } from '@/router'
export default {
    name: 'menu',
    data() {
        return {
            json: [],               // 过滤后的路由
            defaultOpeneds: []      // 默认打开的二级菜单
        }
    },
    methods: {
        // 过滤路由
        filterRoutes(arr) {
            arr.forEach(list => {
                if (list.name === '首页' && list.children) {
                    list.children.forEach(item => {
                        item.path = list.path + '/' + item.path
                        this.json.push(item)
                    })
                } else if (list.name && list.children) {
                    list.children.forEach(item => {
                        item.path = list.path + '/' + item.path
                    })
                    this.json.push(list)
                }
            })
        },
        // 默认打开的二级菜单
        openRoute() {
            this.json.forEach(item => {
                this.defaultOpeneds.push(item.path)
            })
        }
    },
    created() {
        this.filterRoutes(routes)
        this.openRoute()
    }
}
</script>
<style lang='stylus'>
.sticky-class{
    height: 100%;
}
#menu {
    user-select: none;
    height: 100%;
    .el-menu{
        min-height: 100%;
        .menu-icon{
            font-size: 12px;
        }
    }
}
</style>
