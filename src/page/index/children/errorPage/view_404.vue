<template>
    <div id="view_404">
        <error-page404></error-page404>
    </div>
</template>
<script>
import errorPage404 from '@/page/other/page404'
export default {
    name: 'view_404',
    components: { errorPage404 }
}
</script>
<style lang='stylus'>
#view_404 {
    width: 100%;
    height: 100vh;
}
</style>
