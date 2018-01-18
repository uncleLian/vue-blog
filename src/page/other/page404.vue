<template>
    <div id="page404">
        <div class="people">
            <img src="~@/assets/img/people.png">
        </div>
        <div class="text">
            <div class="text-404 sideUp">404</div>
            <div class="text-notFound sideUp">The page you are looking for is no longer here.</div>
            <div class="text-apologize sideUp">We sincerely apologize</div>
            <p><el-button class="goHome sideUp"  round @click="$router.push('/')">Go home</el-button></p>
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
    background-color: #42b983;
    .people{
        position: absolute;
        left: 15%;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
        user-select: none;
        img{
            width: 50%;
        }
    }
    .text {
        position: absolute;
        right: 20%;
        top: 18%;
        z-index: 999;
        font-size: 16px;
        font-family: "Roboto";
        color: #fff;
        text-align: center;
        .sideUp{
            opacity: 0;
            animation: slideUp 0.5s;
            animation-fill-mode: forwards;
        }
        .text-404{
            font-size: 9em;
            color: rgb(83, 62, 41);
            margin-bottom: 20px;
            user-select: none;
        }
        .text-notFound{
            font-size: 1em;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            animation-delay: 0.1s;
        }
        .text-apologize{
            font-size: 2em;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 25px;
            animation-delay: 0.2s;
        }
        .goHome{
            font-size: 20px;
            color: rgb(83, 62, 41);
            font-weight: bold;
            animation-delay: 0.3s;
        }
    }
}
</style>
