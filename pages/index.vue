<!--
 * @description:
 * @author: steve.deng
 * @Date: 2021-05-13 07:29:29
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-17 18:14:54
-->
<template>
	<div class="index ">
		<a
			href="https://github.com/dengzhifeng/projectShow"
			style="z-index:1000;position: fixed; top: 0; right: 0; border: 0;"
			><img
				src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"
				alt="Fork me on GitHub"
		/></a>
		<div class="bg">
			<h2 class="tit">{{ activeNav.title }}</h2>
			<p class="intro">{{ activeNav.intro }}</p>
			<menuNav @getNav="getNav"></menuNav>
		</div>
		<div class="program-list">
			<projectItem
				v-for="item in showProgramList"
				:key="item.name"
				:item="item"
			/>
		</div>
	</div>
</template>

<script>
import menuNav from "@/components/menu/index.vue";
import projectItem from "@/components/projectItem/index.vue";
import programList from "@/data/programList";
export default {
	components: {
		menuNav,
		projectItem
	},
	data() {
		return {
			activeNav: {},
			showProgramList: programList
		};
	},
	async asyncData({ $axios }) {},
	mounted() {
		// this.$nextTick(() => {
		// 	this.$nuxt.$loading.start();
		// 	setTimeout(() => this.$nuxt.$loading.finish(), 3500);
		// });
	},
	methods: {
		getNav(item) {
			this.activeNav = item;

			this.showProgramList = programList.filter(program => {
				return program.type.indexOf(item.name.toLowerCase()) != -1;
			});
		}
	}
};
</script>

<style lang="scss">
.index {
	.bg {
		width: 100%;
		height: 260px;
		background: center no-repeat url("../assets/image/other/header-bg.jpg");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		.tit,
		.intro {
			color: #fff;
			text-align: center;
			text-shadow: 0 4px 8px rgb(7 17 27 / 40%);
		}
		.tit {
			letter-spacing: 10px;
			font-size: 36px;
			line-height: 36px;
			letter-spacing: 10px;
			margin-bottom: 20px;
		}
		.intro {
			margin-left: auto;
			margin-right: auto;
			font-size: 18px;
			width: 880px;
			line-height: 28px;
			height: 56px;
			overflow: hidden;
			font-weight: 600;
		}
	}
	.program-list {
		width: 1200px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 108px;
		text-align: center;
		min-height: 500px;
	}
}
</style>
