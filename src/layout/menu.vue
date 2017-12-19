<template>
    <my-sticky sticky-class="sticky-class">
        <el-aside id="menu" width="240px">
            <el-menu :default-active="$route.path" :router="true" :default-openeds="defaultOpeneds">
                <my-menu-item :json="json"></my-menu-item>
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
        filterRoutes(routes) {
            routes.forEach(list => {
                // 顶级路由如果是首页，则只添加子路由
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

            // 是否展开列表
            this.json.forEach(item => {
                if (item.open) {
                    this.defaultOpeneds.push(item.path)
                }
            })
        }
    },
    created() {
        this.filterRoutes(routes)
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
        .el-menu-item{
            i{
                font-size: 12px;
            }
        }
    }
}
</style>
