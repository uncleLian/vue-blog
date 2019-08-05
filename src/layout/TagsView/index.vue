<template>
    <div class="tag-view-container">
        <scroll-pane ref="scrollPane">
            <div id="tags-view">
                <router-link class="tags-view-item" v-for="tag in tagsViewList" :key="tag.path" ref="tags" :to="{ 'path': tag.path, 'query': tag.query, 'fullPath': tag.fullPath }" :class="isTagActive(tag)? 'active' : ''" @contextmenu.prevent.native="openMenu(tag,$event)">
                    {{tag.meta.title? translationRouteTitle(tag.meta.title) : translationRouteTitle(tag.name)}}
                    <span v-if="!tag.meta.affix" class="el-icon-close" @click.prevent.stop="closeTag(tag)" />
                </router-link>
            </div>
        </scroll-pane>
        <ul v-show="menuVisible" :style="menuStyle" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
            <li v-if="!(selectedTag.meta && selectedTag.meta.affix)" @click="closeTag(selectedTag)">{{$t('tagsView.close') }}</li>
            <li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>
            <li @click="closeAllTags">{{ $t('tagsView.closeAll') }}</li>
        </ul>
    </div>
</template>
<script>
import scrollPane from './scrollPane'
import { translationRouteTitle } from '@/utils/i18n.js'
export default {
    components: { scrollPane },
    data() {
        return {
            selectedTag: '',
            menuStyle: '',
            menuVisible: false
        }
    },
    computed: {
        tagsViewList() {
            return this.$store.state.tagsView.tagsView
        }
    },
    watch: {
        $route() {
            this.addTag()
            this.scrollToCurrenTag()
        },
        menuVisible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },
    mounted() {
        this.$store.dispatch('tagsView/initTagsView')
        this.addTag()
    },
    methods: {
        translationRouteTitle,
        // 打开右键菜单
        openMenu(tag, e) {
            let left = 0
            let top = e.pageY
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const menuLeft = e.pageX - offsetLeft + 15 // 15: margin right

            if (menuLeft > maxLeft) {
                left = maxLeft
            } else {
                left = menuLeft
            }
            this.menuStyle = {
                'left': left + 'px',
                'top': top + 'px'
            }
            this.menuVisible = true
            this.selectedTag = tag
        },
        // 关闭右键菜单
        closeMenu() {
            this.menuVisible = false
        },
        addTag() {
            this.$store.commit('tagsView/ADD_TAGS_VIEW', this.$route)
        },
        closeTag(tag) {
            this.$store.dispatch('tagsView/closeTagsView', tag).then(tags => {
                if (this.isTagActive(tag)) {
                    this.toLastTag(tags)
                }
            })
        },
        refreshSelectedTag() {
            this.$router.replace({ path: '/index/redirect' + this.selectedTag.fullPath })
        },
        closeOthersTags() {
            this.$router.push(this.selectedTag)
            this.$store.commit('tagsView/CLOSE_OTHER_TAGS_VIEW', this.selectedTag)
        },
        closeAllTags() {
            this.$store.dispatch('tagsView/clearTagsView').then(tags => {
                this.toLastTag(tags)
            })
        },
        isTagActive(tag) {
            return tag.path === this.$route.path
        },
        toLastTag(tagsList) {
            const lastTag = this.tagsViewList.slice(-1)[0]
            if (lastTag) {
                this.$router.push(lastTag)
            } else {
                this.$router.push('/')
            }
        },
        scrollToCurrenTag() {
            const tags = this.$refs.tags
            this.$nextTick(() => {
                if (tags && tags.length > 0) {
                    for (const tag of tags) {
                        if (tag.to.path === this.$route.path) {
                        this.$refs.scrollPane.scrollTo(tag)
                            break
                        }
                    }
                }
            })
        }
    }
}
</script>
<style lang='stylus'>
.tag-view-container {
    #tags-view {
        display: flex;
        align-items: center;
        padding: 4px 0 3px;
        .tags-view-item {
            position: relative;
            height: 26px;
            line-height: 26px;
            color: #495060;
            font-size: 12px;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            user-select: none;
            padding: 0 8px;
            margin-left: 5px;
            border: 1px solid #d8dce5;
            background: #fff;
            border-radius: 2px;
            &.active {
                color: #fff;
                background: $appColor;
                border: $appColor;
                &:before {
                    content: '';
                    background: #fff;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    position: relative;
                    margin-right: 2px;
                }
            }
            &:first-of-type {
                margin-left: 15px;
            }
            .el-icon-close {
                width: 16px;
                height: 16px;
                text-align: center;
                vertical-align: 2px;
                border-radius: 50%;
                transition: background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                &:before {
                    display: inline-block;
                    transform: scale(0.6);
                    vertical-align: -3px;
                }
                &:hover {
                    background-color: #b4bccc;
                }
            }
        }
    }
    .contextmenu {
        position: absolute;
        z-index: 111;
        color: #333;
        font-size: 12px;
        font-weight: 400;
        user-select: none;
        padding: 5px 0;
        margin: 0;
        list-style: none;
        background: #fff;
        border-radius: 4px;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
        li {
            padding: 7px 16px;
            cursor: pointer;
            &:hover {
                color: $appColor;
                background: rgba($appColorRGB, 0.1);
            }
        }
    }
}
</style>
