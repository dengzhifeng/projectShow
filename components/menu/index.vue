<!--
 * @description: 导航菜单
 * @author: steve.deng
 * @Date: 2021-05-13 15:48:21
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-17 18:02:41
-->
<template>
	<div class="menu">
		<ul>
			<li
				class="navitem"
				v-for="nav in menu.list"
				:key="nav.name"
				@click="select(nav)"
			>
				<i :class="'navicon ' + nav.icon"></i>
				<span class="navtext">{{ nav.name }}</span>
				<div class="navbot" v-if="nav.name === activeNav.name"></div>
			</li>
		</ul>
	</div>
</template>

<script>
import menu from "./menu.js";
export default {
	components: {},
	props: {},
	data() {
		return {
			menu,
			activeNav: menu.list[0]
		};
	},
	computed: {},
	watch: {},
	created() {
		this.$emit("getNav", this.activeNav);
	},
	mounted() {},
	methods: {
		select(nav) {
			this.activeNav = nav;
			this.$emit("getNav", nav);
		}
	}
};
</script>
<style lang="scss" scoped>
.menu {
	position: absolute;
	width: 1200px;
	height: 120px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 12px;
	-webkit-box-shadow: 0 8px 16px rgb(7 17 27 / 10%);
	box-shadow: 0 8px 16px rgb(7 17 27 / 10%);
	left: 50%;
	bottom: -60px;
	margin-left: -600px;
	padding: 28px 14px 0;
	z-index: 10;
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.navitem {
		float: left;
		width: 108px;
		height: 92px;
		text-align: center;
		cursor: pointer;
		position: relative;
		margin: 0 20px;
		transition: all 0.1s linear;
	}
	.navicon {
		display: block;
		width: 36px;
		height: 36px;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 8px;
		-webkit-transition: all 0.1s linear;
		transition: all 0.1s linear;
		margin-top: 0;
		background-image: url("../../assets/image/other/nav.png");
		background-size: cover;
	}
	.navbot {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 2px;
		background-color: #f01414;
		line-height: 0;
		overflow: hidden;
	}

	.navtext {
		font-size: 14px;
		color: #93999f;
		line-height: 14px;
		-webkit-transition: all 0.3s linear;
		transition: all 0.3s linear;
	}

	.navitem:hover .navtext {
		color: #07111b;
	}
	.navitem:hover {
		margin-top: -6px;
	}
	.navitem .navicon.All {
		background-position: 0 0;
	}
	.navitem .navicon.Angular {
		background-position: -72px 0;
	}
	.navitem .navicon.React {
		background-position: -106px 0;
	}
	.navitem .navicon.Vue {
		background-position: -35px 0;
	}
	.navitem .navicon.Node {
		background-position: -180px 0;
	}
	.navitem .navicon.Other {
		background-position: -145px 0;
	}
}
</style>
