<template>
    <div id="card">
        <el-row :gutter="32" class="count">
            <el-col class="count-item" :xs="24" :sm="12" :lg="6" v-for="(item,index) in list" :key="index">
                <div class="item-container" :class="`item-container-${index + 1}`">
                    <div class="icon">
                        <svg-icon :icon-class="item.icon" />
                    </div>
                    <div class="text">
                        <div class="title">{{item.title}}</div>
                        <vue-num-to class="number" :startVal="0" :endVal="item.endVal" :duration="5000" />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
const random = (lower, upper) => {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
}
export default {
    data() {
        return {
            list: [
                {
                    icon: 'view',
                    title: 'Page Views',
                    endVal: random(10000, 20000)
                },
                {
                    icon: 'users',
                    title: 'Unique Visitor',
                    endVal: random(5000, 10000)
                },
                {
                    icon: 'message',
                    title: 'Message',
                    endVal: random(2000, 5000)
                },
                {
                    icon: 'qq',
                    title: 'QQ group',
                    endVal: 338241465
                }
            ]
        }
    }
}
</script>
<style lang='stylus' scoped>
color1 = #55c8ca;
color2 = #f7b87f;
color3 = #36a3f7;
color4 = #34bfa3;
#card {
    .count {
        padding: 20px;
        .count-item {
            user-select: none;
            margin-bottom: 32px;
            .item-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background-color: #f3f4f5;
                border-radius: 6px;
                cursor: pointer;
                &:hover {
                    opacity: 0.8;
                }
                &.item-container-1 {
                    background: color1;
                }
                &.item-container-2 {
                    background: color2;
                }
                &.item-container-3 {
                    background: color3;
                }
                &.item-container-4 {
                    background: color4;
                }
                .icon {
                    color: #fff;
                    font-size: 48px;
                    padding: 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease-out;
                }
                .text {
                    text-align: right;
                    color: #fff;
                    .title {
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .number {
                        font-size: 20px;
                    }
                }
            }
        }
    }
}
</style>
