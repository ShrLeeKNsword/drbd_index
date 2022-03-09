# 如何运行项目？

本项目运行无需任何编程开发基础

先打开pages->index->index.vue
- 开发一个套壳App，把里面<web-view></web-view>组件里src的网址链接替换成你想要的链接就可以了。
- 需要注意的是，如果是做套壳小程序，各小程序平台，web-view 加载的 url 需要在后台配置域名白名单，包括内部再次 iframe 内嵌的其他 url 。
