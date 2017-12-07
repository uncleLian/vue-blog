<template>
    <my-sticky sticky-class="sticky-class">
        <el-aside id="menu" width="240px">
            <el-menu :default-active="defaultActive" :router="true" :default-openeds="defaultOpeneds">
                <template v-for="(list,listIndex) in json">
                    <!-- 有子路由的 -->
                    <el-submenu v-if="list.children" :index="list.path" :key="listIndex">
                        <template slot="title"><i v-if="list.icon" :class="list.icon"></i><span slot="title">{{list.name}}</span></template>
                        <el-menu-item v-for="(item,itemIndex) in list.children" :index="item.path" :key="itemIndex"><i v-if="item.icon" :class="item.icon"></i>{{item.name}}</el-menu-item>
                    </el-submenu>
                    <!-- 没有子路由的 -->
                    <el-menu-item v-else :index="list.path" :key="listIndex"><i v-if="list.icon" :class="list.icon"></i><span slot="title">{{list.name}}</span></el-menu-item>
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
            defaultActive: '',      // 默认active的路由
            defaultOpeneds: []      // 默认open的菜单
        }
    },
    watch: {
        $route() {
            this.activeRoute()
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
        // 默认open的菜单
        openRoute() {
            this.json.forEach(item => {
                this.defaultOpeneds.push(item.path)
            })
        },
        // 默认active的路由
        activeRoute() {
            this.defaultActive = this.$route.path
        }
    },
    created() {
        this.filterRoutes(routes)
        this.openRoute()
        this.activeRoute()
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
    }
}
</style>
