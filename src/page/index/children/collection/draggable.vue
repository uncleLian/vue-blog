<template>
    <div id="draggable">
        <!-- 拖拽列表1 -->
        <div class="demo demo1">
            <h3>拖拽列表1</h3>
            <my-draggable class="list"  v-model="myListOne" :options="options">
            <div class="item" v-for="(item,index) in myListOne" :key="index">
                <p>{{item.name}}</p>
                <i class="el-icon-delete" @click="remove(item,index)"></i>
            </div>
        </my-draggable>
        </div>
        
        <!-- 拖拽列表2 -->
        <div class="demo demo1">
            <h3>拖拽列表2</h3>
            <my-draggable class="list" v-model="myListTwo" :options="options">
                <div class="item" v-for="(item,index) in myListTwo" :key="index">
                    <p>{{item.name}}</p>
                </div>
            </my-draggable>
        </div>

        <p class="moreLink">更多内容：<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">vue-draggable</a></p>
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
                {name: '11111111111111111111111111111111111111111111111111111111111111111111111111111111111'},
                {name: 'bbb'},
                {name: 'ccc'},
                {name: 'ddd'},
                {name: 'eee'}
            ],
            myListTwo: [
                {name: '22222222222222222222222'},
                {name: 'bbb'},
                {name: 'ccc'},
                {name: 'ddd'},
                {name: 'eee'}
            ]
        }
    },
    methods: {
        remove(item, index) {
            this.myListOne.splice(index, 1)
            this.myListTwo.push(item)
        },
        randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
}
</script>
<style lang='stylus'>
#draggable {
    .demo{
        display: inline-block;
        width: 400px;
        min-height: 200px;
        vertical-align: top;
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
                background: #f0f9eb;
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
</style>
