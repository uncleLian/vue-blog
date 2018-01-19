<template>
    <el-color-picker class="themePicker appColor" v-model="theme"></el-color-picker>
</template>
<script>
const DEFAULT_THEME = '#42b983'
export default {
    name: 'themePicker',
    data() {
        return {
            theme: DEFAULT_THEME,
            themeCSS: '',
            newTheme: '',
            oldTheme: ''
        }
    },
    watch: {
        theme(newVal, oldVal) {
            this.newTheme = this.getThemeCluster(newVal.replace('#', ''))
            this.oldTheme = this.getThemeCluster(oldVal.replace('#', ''))
            const styles = Array.from(document.querySelectorAll('style')).filter(style => {
                const text = style.innerText
                return new RegExp(oldVal, 'i').test(text) || new RegExp(this.oldTheme[1], 'i').test(text)
            })
            styles.forEach(style => {
                const { innerText } = style
                if (typeof innerText !== 'string') return
                style.innerText = this.updateStyle(innerText, this.newTheme, this.oldTheme)
            })
            this.$message.success('换肤成功')
        }
    },
    methods: {
        getThemeCluster(theme) {
            const tintColor = (color, tint) => {
                let red = parseInt(color.slice(0, 2), 16)
                let green = parseInt(color.slice(2, 4), 16)
                let blue = parseInt(color.slice(4, 6), 16)
                // when primary color is in its rgb space
                if (tint === 0) {
                    return [red, green, blue].join(',')
                } else {
                    red += Math.round(tint * (255 - red))
                    green += Math.round(tint * (255 - green))
                    blue += Math.round(tint * (255 - blue))

                    red = red.toString(16)
                    green = green.toString(16)
                    blue = blue.toString(16)

                    return `#${red}${green}${blue}`
                }
            }

            const shadeColor = (color, shade) => {
                let red = parseInt(color.slice(0, 2), 16)
                let green = parseInt(color.slice(2, 4), 16)
                let blue = parseInt(color.slice(4, 6), 16)

                red = Math.round((1 - shade) * red)
                green = Math.round((1 - shade) * green)
                blue = Math.round((1 - shade) * blue)

                red = red.toString(16)
                green = green.toString(16)
                blue = blue.toString(16)

                return `#${red}${green}${blue}`
            }

            const clusters = [theme]
            for (let i = 0; i <= 9; i++) {
                clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
            }
            clusters.push(shadeColor(theme, 0.1))
            return clusters
        },
        updateStyle(style, newTheme, oldTheme) {
            let newStyle = style
            oldTheme.forEach((color, index) => {
                newStyle = newStyle.replace(new RegExp(color, 'ig'), newTheme[index])
            })
            return newStyle
        }
    },
    mounted() {}
}
</script>
<style lang='stylus'>
.themePicker {
    .el-color-picker__trigger {
        border: none;
        .el-color-picker__color {
            border-color: #fff;
        }
    }
}
</style>
