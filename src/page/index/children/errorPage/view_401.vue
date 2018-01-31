<template>
    <div id="view_401">
        <error-page401></error-page401>
    </div>
</template>
<script>
import errorPage401 from '@/page/other/page401'
export default {
    name: 'view_401',
    components: { errorPage401 }
}
</script>
<style lang='stylus'>
#view_401 {
    width: 100%;
    height: 100vh;
}
</style>
