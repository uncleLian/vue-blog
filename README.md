# vue-blog

![image](https://img.shields.io/badge/vue-2.6.8-green.svg)
![image](https://img.shields.io/badge/vue--router-3.0.2-green.svg)
![image](https://img.shields.io/badge/vuex-3.1.0-green.svg)
![image](https://img.shields.io/badge/element--ui-2.6.1-blue.svg)

## 简介

[vue-blog](https://github.com/uncleLian/vue-blog) 是一个后台管理项目解决方案，它基于 [vue.js](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)。使用了目前主流的前端技术栈，并且扩展和集成了许多后台项目经常用到的功能。如：登录、权限验证、多级路由、富文本、I18n国际化等功能特性。相信不管你需求是什么，本项目都能帮助到你。

- [在线访问](http://blog.liansixin.win)
- [使用文档](http://liansixin.win/vue-blog-book)

##### 本项目是后台集成方案，仅供参考，不适合进行二次开发。

- 基础模板建议使用：[vueBlog-template](https://github.com/uncleLian/vueBlog-template)

##### 注意：element-ui@2.3.0+ 版本，最低兼容 vue@2.5.0+

## 前序准备
你的本地环境需要安装 [node](http://nodejs.cn/) 和 [git](https://git-scm.com/)，本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org)、[vue-router](https://router.vuejs.org/zh-cn/)、[vuex](https://vuex.vuejs.org/zh-cn/) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)，所有的请求数据都使用[Mock.js](http://mockjs.com/)模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

如果你是Vue初学者，这里有一些资源可以帮助到你

- [新手向 Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551?refer=evanyou)
- [ES6入门 阮一峰](http://es6.ruanyifeng.com/)
- [Vue入门项目 —— echo回声](https://github.com/uncleLian/vue2-echo)

<img src="http://poci6sbqi.bkt.clouddn.com/vue-blog.png" width="900px" style="max-width: 100%;"/>

## 功能

```js
* 登录 / 注销

* 权限验证
    - 页面级权限
    
* 多环境
    - dev
    - sit
    - prod

* 动态侧边栏（根据路由一键配置）
    - icon
    - title
    - login（是否需要登录）
    - role（是否需要权限）
    - keep（是否缓存页面）
    - hidden（不显示该路由）
    - open（是否展开子菜单）
    - redirectIndex（重定向到第index位子路由）
    
* 动态面包屑
    
* 错误处理
    - 401
    - 404
    - 错误日志
    
* 文件处理
    - 导入Excel
    - 导出Excel
    - 导出Zip

* 其他扩展
    - svg icon / iconfont
    - 引导页
    - 图钉
    - 返回顶部
    - 动态数值
    - 进度条
    - 剪切板
    - 富文本编辑器
    - Markdown编辑器
    - 动态换肤
    - 全屏化
    - 国际化多语言

```

## 开发
```bash
# 克隆项目
git clone https://github.com/uncleLian/vue-blog.git

# 安装依赖
npm install

# 启动服务：localhost:8002
npm run dev
```
## 发布

```
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build

# 查看构建报告
npm run build:report
```

## 版本日志
[发行说明](https://github.com/uncleLian/vue2-blog/releases)中记录了每个版本的详细更改。


## 捐赠
如果你觉得这个项目帮助到了你，你可以请我喝杯饮料表示支持🍹

<img src="http://poci6sbqi.bkt.clouddn.com/donate.jpg" width="500px" style="max-width: 100%;"/>

## 交流
欢迎热爱学习、忠于分享的朋友一起来交流
- Vue交流群：338241465

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present，uncleLian
