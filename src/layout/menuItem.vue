<template>
    <div class="menuItem">
        <template v-for="(list,listIndex) in json">
            <!-- 有子路由的 -->
            <el-submenu v-if="list.children" :index="list.name" :key="listIndex">
                <template slot="title">
                    <i v-if="list.icon" :class="list.icon"></i>
                    <span slot="title">{{ routeName(list) }}</span>
                </template>
                <template v-for="(item,itemIndex) in list.children" >
                    <!-- 子路由里还有子路由的 -->
                    <my-menu-item v-if="item.children" :json="[item]"></my-menu-item>

                    <!-- 子路由里没有子路由的 -->
                    <router-link v-else :to="{name: item.name}">
                        <el-menu-item  :index="item.name" :key="itemIndex">
                            <i v-if="item.icon" :class="item.icon"></i>
                            <span slot="title">{{ routeName(item) }}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>

            <!-- 没有子路由的 -->
            <router-link v-else :to="{name: list.name}">
                <el-menu-item :index="list.name" :key="listIndex">
                    <i v-if="list.icon" :class="list.icon"></i>
                    <span slot="title">{{ routeName(list) }}</span>
                </el-menu-item>
            </router-link>
        </template>
    </div>
</template>
<script>
import { translation } from '@/utils/i18n'
export default {
    name: 'menuItem',
    props: {
        json: Array
    },
    methods: {
        translation,
        routeName(route) {
            if (route.meta && route.meta.title) {
                return this.translation(route.meta.title, 'routes')
            } else {
                return this.translation(route.name, 'routes')
            }
        }
    }
}
</script>
<style lang='stylus'>
.menuItem {
    a{
        display: block;
    }
}
</style>
