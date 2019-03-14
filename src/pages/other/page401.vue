<template>
    <div id="page401">
        <div class="people">
            <img src="~@/assets/img/people.png">
        </div>
        <div class="text">
            <div class="text-401 sideUp">401</div>
            <div class="text-detail sideUp">Mom says you don't have enough age to see these things.</div>
            <div class="text-title sideUp">You have no permission</div>
            <p>
                <el-button class="goBack sideUp" round @click="$router.go(-1)">Go Back</el-button>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'page401'
}
</script>
<style lang='stylus'>
#page401 {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $appColor;
    .people {
        position: absolute;
        left: 20%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        user-select: none;
        img {
            width: 100%;
        }
    }
    .text {
        position: absolute;
        right: 20%;
        top: 18%;
        z-index: 999;
        font-size: 16px;
        font-family: 'Roboto';
        color: #fff;
        text-align: center;
        .sideUp {
            opacity: 0;
            animation: slideUp 0.5s;
            animation-fill-mode: forwards;
        }
        .text-401 {
            font-size: 6em;
            color: rgb(83, 62, 41);
            margin-bottom: 20px;
            user-select: none;
        }
        .text-detail {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            animation-delay: 0.1s;
        }
        .text-title {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2em;
            animation-delay: 0.2s;
        }
        .goBack {
            animation-delay: 0.3s;
        }
    }
}
@keyframes slideUp {
    0% {
        transform: translateY(60px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
