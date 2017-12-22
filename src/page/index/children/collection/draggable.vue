<template>
    <div id="draggable">
        <div class="demo">
            <div>
                <h3>拖拽列表一</h3>
                <my-draggable class="list"  v-model="myListOne" :options="options">
                <div class="item" v-for="(item,index) in myListOne" :key="index">
                    <p>{{item.name}}</p>
                    <i class="el-icon-delete" @click="remove(item,index)"></i>
                </div>
            </my-draggable>
            </div>
            
            <div>
                <h3>拖拽列表二</h3>
                <my-draggable class="list" v-model="myListTwo" :options="options" @change="changeTwo">
                    <div class="item" v-for="(item,index) in myListTwo" :key="index">
                        <p>{{item.name}}</p>
                    </div>
                </my-draggable>
            </div>
        </div>
        
        <div class="code">
            <pre>
                <h3>拖拽列表一</h3>
                <code>{{myListOne}}</code>
            </pre>

            <pre>
                <h3>拖拽列表二</h3>
                <code>{{myListTwo}}</code>
            </pre>
        </div>

        <div class="moreLink">
            <p>更多内容：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">vue-draggable</a></p>
            <p>完整API：<a href="https://github.com/RubaXa/Sortable#options" target="_blank">Sortable.js</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'draggable',
    data() {
        return {
            options: {
                group: 'article',
                draggable: '.item'
            },
            myListOne: [
                {name: '￥￥￥：111'},
                {name: '￥￥￥：222'},
                {name: '￥￥￥：333'},
                {name: '￥￥￥：444'},
                {name: '￥￥￥：555'}
            ],
            myListTwo: [
                {name: '$$$：111'},
                {name: '$$$：222'},
                {name: '$$$：333'},
                {name: '$$$：444'},
                {name: '$$$：555'}
            ]
        }
    },
    watch: {
        myListOne(val) {
            this.$message.warning('拖拽列表一：数据发生变化')
        }
    },
    methods: {
        remove(item, index) {
            this.myListOne.splice(index, 1)
            this.myListTwo.push(item)
        },
        changeTwo() {
            this.$notify.success({
                title: '拖拽列表二',
                message: '拖拽动作使数据发生变化'
            })
        }
    }
}
</script>
<style lang='stylus'>
#draggable {
    .demo{
        & > div{
            display: inline-block;
            vertical-align: top;
            width: 400px;
            min-height: 200px;
            margin-right: 50px;
        }
        .list{
            position: relative;
            border: 1px solid #e9e9e9;
            border-bottom: none;
            .item{
                position: relative;
                padding: 16px 15px;
                border-bottom: 1px solid #e9e9e9;
                &.sortable-chosen{
                    /*background: #f0f9eb;*/
                }
                &.sortable-ghost{
                    background: #42b983;
                }
                p{
                    width: 100%;
                    margin: 0;
                    padding-right: 25px; 
                    word-wrap: break-word;
                }
                i{
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
            }
        }
    }
    .code{
        margin-top: 20px;
        pre{
            display: inline-block;
            vertical-align: top;
            width: 400px;
            margin-right: 50px;
            background: #eee;
        }
    }
    h3{
        text-align: center;
    }
}
</style>
