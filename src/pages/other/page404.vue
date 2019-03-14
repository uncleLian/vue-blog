<template>
    <div id="page404">
        <div class="wrapper">
            <img class="logo" src="~@/assets/img/404.gif">
            <p class="text">The page you are looking for is either stolen by aliens or never existed.</p>
            <p>
                <el-button class="goHome" round @click="$router.push('/')">Go Home</el-button>
            </p>
            <p class="issues">
                <a href="https://github.com/uncleLian/vue2-blog/issues" target="_blank">Issues me</a>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'page404'
}
</script>
<style lang='stylus'>
#page404 {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: $appColor;
    .wrapper {
        position: absolute;
        max-width: 320px;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        text-align: center;
        .logo {
            width: 100%;
        }
        .text {
            color: #fff;
            font-size: 16px;
            font-weight: 400;
            margin: 2em 0;
        }
        .issues {
            margin-top: 10%;
            a {
                color: #fff;
            }
        }
    }
}
</style>
