/*
 * @description: 项目列表
 * @author: steve.deng
 * @Date: 2021-05-17 16:58:35
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-22 16:59:09
 */
const programList = [
	// hexo博客
	{
		// 类型
		type: ["all", "other"],
		// 封面图片
		img: "default",
		name: "steven's blog", // 项目名
		tech: "Hexo • Html •  Markdown", // 技术栈
		desc: "腾讯云部署、hexo框架搭建的技术博客", //  描述
		demoUrl: "http://dengsteven.cn/blog/",
		gitUrl: "https://github.com/dengzhifeng/blog"
	},
	// vue ssr demo
	{
		// 类型
		type: ["all", "vue"],
		// 封面图片
		img: "vue",
		name: "vue-ssr-demo", // 项目名
		tech: "Vue2 • SSR • Nuxt", // 技术栈
		desc: "使用Nuxt.js技术做服务端渲染的练手demo", //  描述
		demoUrl: "http://ssr.dengsteven.cn/",
		gitUrl: "https://github.com/dengzhifeng/ssr_demo"
	},
	// vue3 demo
	{
		// 类型
		type: ["all", "vue"],
		// 封面图片
		img: "vue",
		name: "vue3-ts-demo", // 项目名
		tech: "Vue3 • ts", // 技术栈
		desc: "ts开发、vue3练手demo", //  描述
		demoUrl: "http://dengsteven.cn/lesson_vue3/",
		gitUrl: "https://github.com/dengzhifeng/lesson_vue3.0_ts"
	},
	// command-cli
	{
		// 类型
		type: ["all", "node"],
		// 封面图片
		img: "node",
		name: "command-cli", // 项目名
		tech: "Npm • Node.js • Commander", // 技术栈
		desc: "命令行工具, 可自动提交代码、合并代码、替换文件、上传小程序等", //  描述
		demoUrl: "https://www.npmjs.com/package/command-cli",
		gitUrl: "https://github.com/dengzhifeng/command-cli"
	},
	// logo-react
	{
		// 类型
		type: ["all", "react"],
		// 封面图片
		img: "react",
		name: "logo-react", // 项目名
		tech: "React • TS• React-redux", // 技术栈
		desc: "在线生成logo图片", //  描述
		demoUrl: "http://logo.dengsteven.cn/logo/",
		gitUrl: "https://github.com/dengzhifeng/logoly_react"
	}
];
export default programList;
