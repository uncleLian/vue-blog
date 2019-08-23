import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
    namespaced: true,
    state: {
        tagsView: []
    },
    mutations: {
        SET_TAGS_VIEW(state, views) {
            state.tagsView = [...views]
        },
        ADD_TAGS_VIEW(state, view) {
            if (view.name && view.meta && !view.meta.hidden) {
                const isHas = state.tagsView.some((v, index) => {
                    if (v.path === view.path) {
                        // 存在时进行替换（场景：参数变化）
                        state.tagsView.splice(index, 1, { ...view })
                        return true
                    }
                })
                if (isHas) return
                state.tagsView.push({ ...view })
            }
        },
        CLOSE_TAGS_VIEW(state, view) {
            let index = state.tagsView.findIndex(v => v.path === view.path)
            state.tagsView.splice(index, 1)
        },
        CLOSE_OTHER_TAGS_VIEW(state, view) {
            state.tagsView = state.tagsView.filter(v => v.meta.affix || v.path === view.path)
        },
        CLEAR_TAGS_VIEW(state) {
            state.tagsView = state.tagsView.filter(v => v.meta.affix)
        }
    },
    actions: {
        initTagsView({ commit, rootState }) {
            let affixTags = filterAffixTags(rootState.routes.sideRoutes[0].children)
            commit('SET_TAGS_VIEW', affixTags)
            function filterAffixTags(routes, basePath = '/index') {
                let tags = []
                routes.forEach(route => {
                    // 过滤外链
                    if (!isExternal(route.path)) {
                        let tagPath = path.resolve(basePath, route.path)
                        if (route.meta && route.meta.affix) {
                            tags.push({
                                fullPath: tagPath,
                                path: tagPath,
                                name: route.name,
                                meta: { ...route.meta }
                            })
                        }
                        if (route.children) {
                            const tempTags = filterAffixTags(route.children, tagPath)
                            if (tempTags.length >= 1) {
                                tags = [...tags, ...tempTags]
                            }
                        }
                    }
                })
                return tags
            }
        },
        closeTagsView({ state, commit }, view) {
            return new Promise(resolve => {
                commit('CLOSE_TAGS_VIEW', view)
                resolve([...state.tagsView])
            })
        },
        clearTagsView({ state, commit }, view) {
            return new Promise(resolve => {
                commit('CLEAR_TAGS_VIEW', view)
                resolve([...state.tagsView])
            })
        }
    }
}
