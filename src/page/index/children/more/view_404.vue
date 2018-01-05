<template>
    <div id="view_404">
        <my-errorPage></my-errorPage>
    </div>
</template>
<script>
import myErrorPage from '@/page/other/page404'
export default {
    name: 'view_404',
    components: { myErrorPage }
}
</script>
<style lang='stylus'>
#view_404 {
    margin: 20px;
    position: absolute;
    width: 90%;
    height: 90%;
    top: 0;
    left: 0
}
</style>
