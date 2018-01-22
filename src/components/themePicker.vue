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
            newTheme: '',
            oldTheme: ''
        }
    },
    watch: {
        theme(newVal, oldVal) {
            if (!newVal) {
                this.theme = oldVal
            } else if (newVal && oldVal) {
                this.init_theme(newVal, oldVal)
            }
        }
    },
    methods: {
        init_theme(newVal, oldVal) {
            if (newVal && oldVal && newVal !== oldVal) {
                this.newTheme = this.getThemeCluster(newVal.replace('#', ''))
                this.oldTheme = this.getThemeCluster(oldVal.replace('#', ''))
                const styles = Array.from(document.querySelectorAll('style')).filter(style => {
                    const text = style.innerText
                    return new RegExp(oldVal, 'i').test(text) || new RegExp(this.getTricolor(oldVal), 'i').test(text)
                })
                styles.forEach(style => {
                    const { innerText } = style
                    if (typeof innerText !== 'string') return
                    style.innerText = this.updateStyle(innerText, this.newTheme, this.oldTheme)
                })
                this.$message.success('换肤成功')
            }
        },
        // 获取三原色
        getTricolor(color) {
            if (color[0] === '#') {
                color = color.replace('#', '')
            }
            return {
                red: parseInt(color.slice(0, 2), 16),
                green: parseInt(color.slice(2, 4), 16),
                blue: parseInt(color.slice(4, 6), 16)
            }
        },
        // 获取颜色集群
        getThemeCluster(theme) {
            // 获取16进制颜色
            const tintColor = (color, tint) => {
                let { red, green, blue } = this.getTricolor(color)
                red += Math.round(tint * (255 - red))
                green += Math.round(tint * (255 - green))
                blue += Math.round(tint * (255 - blue))
                red = red.toString(16)
                green = green.toString(16)
                blue = blue.toString(16)
                return `#${red}${green}${blue}`
            }
            // 获取shade颜色
            const shadeColor = (color, shade) => {
                let { red, green, blue } = this.getTricolor(color)
                red = Math.round((1 - shade) * red)
                green = Math.round((1 - shade) * green)
                blue = Math.round((1 - shade) * blue)
                red = red.toString(16)
                green = green.toString(16)
                blue = blue.toString(16)
                return `#${red}${green}${blue}`
            }
            // 获取rgb格式
            const rgbColor = (color) => {
                let { red, green, blue } = this.getTricolor(color)
                return {
                    rgb: [red, green, blue].join(','),
                    rgb_space: [red, green, blue].join(', ')
                }
            }

            const clusters = [`#${theme}`]
            for (let i = 1; i <= 9; i++) {
                clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
            }
            clusters.push(shadeColor(theme, 0.1))

            let clusterOf16 = clusters.slice()
            for (let i = 0; i < clusterOf16.length; i++) {
                let rgbObj = rgbColor(clusterOf16[i])
                clusters.push(rgbObj.rgb)
                clusters.push(rgbObj.rgb_space)
            }
            return clusters
        },
        updateStyle(style, newTheme, oldTheme) {
            let newStyle = style
            oldTheme.forEach((color, index) => {
                newStyle = newStyle.replace(new RegExp(color, 'ig'), newTheme[index])
            })
            return newStyle
        }
    }
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
