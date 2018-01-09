<template>
	<keep-alive v-if="$route.meta.keep">
		<router-view ></router-view>
	</keep-alive>
	<router-view v-else></router-view>
</template>
<script>
export default {
    name: 'my-view'
}
</script>
<style lang='stylus'>
</style>
