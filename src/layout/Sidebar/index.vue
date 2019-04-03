<template>
    <div class="sideBar" :style="{'min-width': minWidth}">
        <el-aside id="side" :width="minWidth" :style="{'background': $style.menuBg}">
            <el-scrollbar wrap-class="scrollbar-wrapper">
                <el-menu :default-active="$route.name" :collapse="isCollapse" :default-openeds="defaultOpeneds" :background-color="$style.menuBg" :text-color="$style.menuText" mode="vertical">
                    <side-item :json="filterRoutes"></side-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>
    </div>
</template>
<script>
import sideItem from './sideItem'
import { sideRoutes } from '@/router'
export default {
    components: { sideItem },
    data() {
        return {
            filterRoutes: [], // 过滤后的路由
            defaultOpeneds: [] // 默认打开的二级菜单
        }
    },
    computed: {
        isCollapse() {
            return !this.$store.state.sidebarStatus
        },
        minWidth() {
            return this.isCollapse ? '36px' : this.$style.menuWidth
        }
    },
    created() {
        this.filterRoutes = this.handleRoutes(sideRoutes)
    },
    methods: {
        // 递归过滤路由
        handleRoutes(Arr) {
            const Routes = Arr.filter(route => {
                if (route.name) {
                    if (route.meta) {
                        if (route.meta.hidden) {
                            return false
                        } else {
                            if (route.meta.open) {
                                this.defaultOpeneds.push(route.name)
                            }
                        }
                    }
                    if (route.children) {
                        route.children = this.handleRoutes(route.children)
                    }
                    return true
                } else {
                    return false
                }
            })
            return Routes
        }
    }
}
</script>
<style module>
:export {
    menuBg: #304156;
    menuText: #f5f5f5;
    menuWidth: 180px;
}
</style>
<style lang="stylus">
.sideBar {
    transition: min-width 0.28s;
    #side {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        flex-direction: column;
        height: 100%;
        user-select: none;
        transition: width 0.28s;
        transform: translateZ(0); // 防止抖动
        .scrollbar-wrapper {
            overflow-x: hidden !important;
        }
        .el-menu {
            width: 100%;
            flex-grow: 1;
            border: none;
        }
        .el-menu--collapse {
            .el-submenu {
                & > .el-submenu__title {
                    padding: 0 10px !important;
                    & > span {
                        height: 0;
                        width: 0;
                        overflow: hidden;
                        visibility: hidden;
                        display: inline-block;
                    }
                    .el-submenu__icon-arrow {
                        display: none;
                    }
                }
            }
            .el-tooltip {
                padding: 0 10px !important;
            }
        }
        .horizontal-collapse-transition {
            transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
        }
    }
}
</style>
