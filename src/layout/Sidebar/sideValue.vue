<script>
export default {
    name: 'sideValue',
    functional: true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(h, context) {
        const { icon, title } = context.props
        const vnodes = []
        if (icon) {
            if (icon.includes('el-icon-')) {
                vnodes.push(<i class={'el-icon ' + icon} />)
            } else {
                vnodes.push(<svg-icon class="svg-icon" icon-class={icon} />)
            }
        }
        if (title) vnodes.push(<span slot='title'>{(title)}</span>)
        return vnodes
    }
}
</script>
<style lang="stylus" scoped>
.svg-icon {
    margin-right: 16px;
}
.el-icon {
    color: inherit;
    width: 14px;
    font-size: 14px;
    margin-right: 16px;
}
</style>
