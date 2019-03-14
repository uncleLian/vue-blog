export default {
    route: {
        index: '首页',
        home: '主页',
        documents: '文档',
        guide: '引导页',
        permission: '权限测试',
        icons: '图标',
        components: '组件',
        loading: '加载提示',
        sticky: '图钉',
        backTop: '返回顶部',
        numTo: '动态数值',
        clipboard: '剪贴板',
        progressbar: '进度条',
        editor: '富文本编辑器',
        markdown: 'Markdown',
        excel: 'Excel',
        exportExcel: '导出Excel',
        exportSelected: '导出Selected',
        importExcel: '导入Excel',
        zip: 'Zip',
        exportZip: '导出Zip',
        errorPage: '错误页面',
        '401': '401',
        '404': '404',
        errorLog: '错误日志',
        i18n: '国际化'
    },
    header: {
        github: '项目地址',
        logout: '退出'
    },
    guide: {
        description: '该功能可以让用户聚焦于一点，用来引导新用户将会非常棒。基于',
        button: '打开引导',
        Cola: {
            title: '伸缩按钮',
            description: '打开/关闭侧边栏'
        },
        Breadcrumb: {
            title: '面包屑',
            description: '指示当前页面位置'
        },
        Language: {
            title: '语言按钮',
            description: '切换系统语言'
        }
    },
    permission: {
        description: '进入此页面需要admin权限，如果你是visitor则无法进入此页面，请刷新重新查看'
    },
    icons: {
        description: '本项目所有SVG图标'
    },
    sticky: {
        description: '当滚动到一定值时黏贴在页面上',
        top: '固定在顶部',
        bottom: '固定在底部',
        fixed50: '固定在距离顶部 50px 的位置，并监听状态'
    },
    backTop: {
        description: '当滚动到一定值时显示按钮，点击将页面滚动到顶部',
        default: '默认调用',
        changeStyle: '改变样式并监听到达顶部回调',
        changeButton: '返回顶部'
    },
    numTo: {
        description: '将数字滚动起来，递增/递减到目标值',
        start: '开始值',
        end: '结束值',
        duration: '时长',
        prefix: '前缀',
        suffix: '后缀',
        decimals: '小数点符号',
        decimal: '小数点后几位',
        autoplay: '自动开始',
        ease: '平滑动画',
        button: {
            start: '开始',
            pause: '暂停',
            resume: '恢复',
            reset: '重置'
        }
    },
    progressbar: {
        description: '指示当前进度'
    },
    clipboard: {
        description: '复制/剪切指定值',
        copy: '复制',
        cut: '剪切',
        default: 'JS调用',
        directive: '指令调用（推荐）'
    },
    editor: {
        description: '富文本编辑器（可以直接复制文章查看效果）'
    },
    markdown: {
        description: 'Markdown编辑器'
    },
    excel: {
        filename: '请输入文件名（默认example）',
        exportExcel: '导出所有数据到excel',
        exportSelected: '导出所选数据到excel',
        importExcel: '导入excel文件',
        export: '导出',
        import: '导入'
    },
    errorLog: {
        description: '现在的管理系统大多是SPA的形式，它提高了用户体验，但同时也增加了页面问题的可能性，小的疏忽可能导致整个页面的死锁。好在Vue提供了一种方法捕捉异常，在钩子里你可以处理错误或提交错误信息。具体请查看',
        tip: '请点击右上角bug图标',
        button: '添加错误'
    },
    login: {
        step: '系统登录',
        username: '用户名',
        password: '密码',
        submit: '登录',
        usernameMsg: '请输入账号',
        passwordMsg: '请输入密码',
        successMsg: '登录成功',
        errorMsg: '账号密码错误'
    }
}
