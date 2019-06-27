<script>
export default {
    render: function (h) {
        return h() // avoid warning message
    },
    beforeCreate() {
        console.log(this.$route)
        const { params, query } = this.$route
        const { path } = params
        this.$router.replace({ path: '/' + path, query })
    }
}
</script>
