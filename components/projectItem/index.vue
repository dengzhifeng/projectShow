<!--
 * @description: 项目item
 * @author: steve.deng
 * @Date: 2021-05-17 16:12:37
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-05-17 17:50:22
-->
<template>
	<div class="program-item">
		<div class="shadow">
			<div class="program-list-head">
				<img
					style="width: 100%;height: 100%;"
					:src="
						require('../../assets/image/projectCover/' +
							item.img +
							'.jpg')
					"
				/>
			</div>
			<div class="program-list-cont">
				<!-- 项目名 -->
				<div class="program-list-tit">{{ item.name }}</div>
				<!-- 项目技术栈 -->
				<div class="program-list-t clearfix">
					<span class="text">{{ item.tech }}</span>
				</div>
				<!-- 项目描述 -->
				<div class="program-list-dest">
					{{ item.desc }}
				</div>

				<div class="program-list-bot">
					<span class="text" v-if="item.demoUrl"
						><a target="_blank" :href="item.demoUrl"
							>在线演示</a
						></span
					>
					<span class="text"></span>
					<span class="git"
						><a target="_blank" :href="item.gitUrl">Github</a></span
					>
				</div>
			</div>
		</div>
		<div class="c-line"></div>
		<div class="d-line"></div>
	</div>
</template>

<script>
export default {
	name: "projectItem",
	components: {},
	props: {
		item: [Object]
	},
	data() {
		return {};
	},
	computed: {
		img() {
			return;
		}
	},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped>
.program-item {
	position: relative;
	cursor: default;
	float: left;
	width: 276px;
	height: 326px;
	-webkit-transition: all 0.3s linear;
	transition: all 0.3s linear;
	margin-bottom: 32px;
	text-align: left;
	margin-right: 32px;
	.shadow {
		-webkit-transition: all 0.3s linear;
		transition: all 0.3s linear;
		-webkit-box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
		box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
		overflow: hidden;
		.program-list-head {
			height: 96px;
			border-top-left-radius: 6px;
			border-top-right-radius: 6px;
			background-color: #f3f5f7;
			overflow: hidden;
		}
		.program-list-cont {
			position: relative;
			height: 220px;
			overflow: hidden;
			background-color: #fff;
			padding: 0 24px;
			border-bottom-right-radius: 6px;
			border-bottom-left-radius: 6px;
		}

		.program-list-tit {
			width: 100%;
			padding: 22px 0 8px;
			color: #07111b;
			font-size: 16px;
			line-height: 28px;
			max-height: 55px;
			letter-spacing: -0.1px;
			word-break: break-all;
		}
	}
}
.program-item .program-list-dest,
.program-item .program-list-tit {
	text-overflow: ellipsis;
	word-wrap: break-word;
	overflow: hidden;
	text-overflow: -o-ellipsis-lastline;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.program-item .program-list-dest {
	font-size: 12px;
	line-height: 24px;
	height: 68px;
	max-height: 68px;
	word-break: normal;
	color: #333;
	word-break: break-all;
}
.program-item .program-list-bot {
	position: absolute;
	height: 24px;
	bottom: 24px;
	left: 24px;
	right: 24px;
}
.program-item .text {
	font-size: 13px;
	color: #93999f;
	line-height: 24px;
}
.program-item .git,
.program-item .git > a,
.program-item .text > a {
	color: #3b38ff !important;
}
.program-item .git {
	float: right;
	height: 20px;
	line-height: 24px;
	font-weight: 200;
	font-size: 14px;
}
.program-item:nth-child(4n) {
	margin-right: 0;
}
.program-item .c-line {
	width: 264px;
	margin-top: 2px;
	margin-bottom: 2px;
}
.program-item .d-line {
	width: 252px;
}
.program-item .c-line,
.program-item .d-line {
	-webkit-transition: all 0.3s linear;
	transition: all 0.3s linear;
	background-color: #fff;
	height: 3px;
	margin-left: auto;
	margin-right: auto;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
	-webkit-box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
	box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
}
.program-item:hover .c-line,
.program-item:hover .d-line,
.program-item:hover .shadow {
	-webkit-box-shadow: 0 8px 6px 0 rgb(7 17 27 / 20%);
	box-shadow: 0 8px 6px 0 rgb(7 17 27 / 20%);
}
.program-list-head > img {
	transition: all 0.3s linear;
}

.program-item:hover .program-list-head > img {
	-webkit-transform: scale(1.2);
	transform: scale(1.2);
}
</style>
