<template>
    <div class="menuItem">
        <template v-for="(list,listIndex) in json">
            <!-- 有子路由的 -->
            <el-submenu v-if="list.children" :index="list.path" :key="listIndex">
                <template slot="title">
                    <i v-if="list.icon" :class="list.icon"></i>
                    <span slot="title">{{list.name}}</span>
                </template>
                <template v-for="(item,itemIndex) in list.children" >
                    <!-- 子路由里还有子路由的 -->
                    <my-menu-item v-if="item.children" :json="[item]"></my-menu-item>

                    <!-- 子路由里没有子路由的 -->
                    <el-menu-item v-else :index="item.path" :key="itemIndex">
                        <i v-if="item.icon" :class="item.icon"></i>{{item.name}}
                    </el-menu-item>
                </template>
            </el-submenu>

            <!-- 没有子路由的 -->
            <el-menu-item v-else :index="list.path" :key="listIndex">
                <i v-if="list.icon" :class="list.icon"></i>
                <span slot="title">{{list.name}}</span>
            </el-menu-item>
        </template>
    </div>
</template>
<script>
export default {
    name: 'menuItem',
    props: {
        json: Array
    }
}
</script>
<style lang='stylus'>
.menuItem {}
</style>
