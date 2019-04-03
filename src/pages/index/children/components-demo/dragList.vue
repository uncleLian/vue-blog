<template>
    <div id="dragList" v-loading="loading">
        <div class="app-introduce">
            {{$t('dragList.description')}}
            <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Vue.Draggable</a>
        </div>
        <div class="draglist-contianer">
            <div class="list-group">
                <div class="list-group-header success">已上架</div>
                <draggable v-model="defaultJson" group="music">
                    <div class="list-group-item" v-for="(item, index) in defaultJson" :key="item.sound.id">
                        <span>{{index + 1}}</span>
                        {{item.sound.name}}
                    </div>
                </draggable>
            </div>
            <div class="list-group">
                <div class="list-group-header info">待上架</div>
                <draggable v-model="newJson" group="music">
                    <div class="list-group-item" v-for="(item, index) in newJson" :key="item.sound.id">
                        <span>{{index + 1}}</span>
                        {{item.sound.name}}
                    </div>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name: 'dragList',
    components: { draggable },
    data() {
        return {
            defaultJson: [],
            newJson: [],
            loading: false
        }
    },
    mounted() {
        this.getTableList()
    },
    methods: {
        getTableList() {
            this.loading = true
            this.$store.dispatch('GET_LIST_DATA').then(res => {
                if (res) {
                    let length = res.data.length / 2
                    this.defaultJson = res.data.slice(0, length)
                    this.newJson = res.data.slice(length)
                }
                this.loading = false
            })
        }
    }
}
</script>
<style lang='stylus'>
#dragList {
    .draglist-contianer {
        display: flex;
        .list-group {
            width: 30%;
            display: flex;
            flex-direction: column;
            margin-right: 50px;
            .list-group-header {
                color: #fff;
                font-weight: bold;
                text-align: center;
                padding: 12px 20px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-bottom: 0;
                &.success {
                    color: $appColor;
                }
                &.info {
                    color: #E6A23C;
                }
            }
            .list-group-item {
                position: relative;
                cursor: move;
                padding: 12px 20px;
                margin-bottom: -1px;
                background-color: #fff;
                border: 1px solid rgba(0, 0, 0, 0.125);
                span {
                    margin-right: 10px;
                }
                &:last-child {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
            }
        }
    }
}
</style>
