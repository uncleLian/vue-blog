# vue-blog

![image](https://img.shields.io/badge/vue-2.5.13-blue.svg)
![image](https://img.shields.io/badge/vue--router-3.0.1-blue.svg)
![image](https://img.shields.io/badge/vuex-3.0.1-blue.svg)
![image](https://img.shields.io/badge/element--ui-2.3.2-blue.svg)

## 简介

`vue-blog` 是一个后台项目解决方案，它基于 [vue.js](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)。使用了目前主流的前端技术栈，并且扩展和集成了许多后台项目经常用到的功能。如：登录、权限验证、多级路由、富文本、I18n国际化等功能特性。相信不管你需求是什么，本项目都能帮助到你。

- [在线访问](http://blog.liansixin.win)
- [使用文档](http://liansixin.win/vue-blog-book)

注意：该项目使用 element-ui@2.0.0+ 版本，所以最低兼容 vue@2.5.0+

## 前序准备
你的本地环境需要安装 [node](http://nodejs.cn/) 和 [git](https://git-scm.com/)，本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org)、[vue-router](https://router.vuejs.org/zh-cn/)、[vuex](https://vuex.vuejs.org/zh-cn/) 和 [element-ui](http://element-cn.eleme.io/#/zh-CN/component/installation)，所有的请求数据都使用[Mock.js](http://mockjs.com/)模拟（图片数据除外），提前了解和学习这些知识会对使用本项目有很大的帮助。

如果你是Vue初学者，这里有一些资源可以帮助到你

- [新手向 Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551?refer=evanyou)
- [ES6入门 阮一峰](http://es6.ruanyifeng.com/)
- [echo回声](https://github.com/uncleLian/vue2-echo)
- [今日头条——移动端](https://github.com/uncleLian/vue2-news)
- [今日头条——native端](https://github.com/uncleLian/vue2-native)
- [头条号](https://github.com/uncleLian/vue2-health)
- [webpack构建优化](https://zhuanlan.zhihu.com/p/26710831) （webpack < 4）

<img src="https://github.com/uncleLian/vue2-blog/raw/master/screenshots/home.jpg" width="900px" style="max-width: 100%;"/>

## 说明
> 如果对你有帮助，你可以点右上角 "star"支持一下，非常感谢！🌹

> 或者你可以 "follow（关注）" 一下作者，我正在不断开源更多实用的项目。

> 如有问题可以直接在 Issues 中反馈，或者加入我们下方的Vue群更进一步地交流。


## 功能
- [x] 登录/注销
- [x] 权限验证
- [x] 前端mock数据
- [x] 多环境发布
- [x] 动态侧边栏（支持多级路由和一键配置图标、登录、展开、缓存等选项）
- [x] 动态面包屑
- [x] 动态换肤（实现element-ui官网的换肤功能）
- [x] 图钉
- [x] 返回顶部
- [x] [动态数值](https://github.com/uncleLian/vue-num-to)
- [x] 加载提示（3种状态：加载中，无数据，出现错误且支持点击重新请求）
- [x] 进度条
- [x] [剪贴板](https://github.com/uncleLian/vue-clipboard-pack)
- [x] 富文本编辑器（自定义图片上传、草稿、预览等）
- [x] Markdown编辑器（搭配Markdown语法转HTML功能）
- [x] 导入.md文件
- [x] 导入导出Excel
- [x] Echarts 图表
- [x] 拖拽列表、表格
- [x] 401、404页面
- [x] 错误日志（全局错误捕捉）
- [x] Iconfont图标
- [x] 国际化多语言（中文、English）
- [x] ...

##### 待更新
- [ ] 骨架模板

## 开发
```bash
# 克隆项目
git clone https://github.com/uncleLian/vue-blog.git

# 安装依赖
npm install
   
# 建议不要用cnpm安装，某些依赖可能无法安装， 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务：localhost:8020
npm run dev
```
## 发布

```
# 构建测试环境
npm run build:sit

# 构建生产环境
npm run build:prod
```

## 版本日志
[发行说明](https://github.com/uncleLian/vue2-blog/releases)中记录了每个版本的详细更改。


## 捐赠
如果你觉得这个项目帮助到了你，你可以请我喝一杯饮料表示支持🍹

<img src="https://github.com/uncleLian/vue2-blog/raw/master/screenshots/donate.jpg" width="500px" style="max-width: 100%;"/>

## 交流
欢迎热爱学习、忠于分享的朋友一起来交流
- QQ：771674109
- Vue交流群：338241465 —— 广州-小鑫

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present，uncleLian
