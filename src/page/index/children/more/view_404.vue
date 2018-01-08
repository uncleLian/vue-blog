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
    width: 100%;
    height: 100vh;
}
</style>
