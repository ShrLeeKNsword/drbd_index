<!-- 
web-view 是一个 web 浏览器组件，可以用来承载网页的容器，会自动铺满整个页面。
开发一个套壳App，把下面<web-view></web-view>组件里src的网址链接替换成你想要的链接就可以了。
需要注意的是，如果是做套壳小程序，各小程序平台，web-view 加载的 url 需要在后台配置域名白名单，包括内部再次 iframe 内嵌的其他 url 。
-->
<template>
	<view>
		<web-view src="https://static-26027401-442d-4ee0-9a3f-a7cd25a021c2.bspapp.com/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>
</style>
