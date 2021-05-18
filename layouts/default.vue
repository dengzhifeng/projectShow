<!--
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 10:15:40
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-17 14:25:42
-->
<template>
	<div class="defaultLayout">
		<!-- <div class="header" v-if="hasNav">

			<img src="@/static/header-bg.jpg" alt="" />
			<nav class="nav">
				<nuxt-link to="/">首页</nuxt-link>
				<nuxt-link to="/category">分类</nuxt-link>
				<nuxt-link to="/about">关于</nuxt-link>
			</nav>
		</div> -->

		<!-- 类似router-view  nuxt-->
		<Nuxt />
	</div>
</template>
<script>
export default {
	computed: {
		hasNav() {
			return this.$route.path !== "/login" && this.$route.path !== "/reg";
		}
	}
};
</script>
<style lang="scss">
.defaultLayout {
	min-width: 1200px;
}
</style>
