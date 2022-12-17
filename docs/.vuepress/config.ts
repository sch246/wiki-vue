import { defineUserConfig, PluginObject } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

import {AutoBar} from "vuepress-auto-bar";
let bar = new AutoBar();

let sidebars = bar.getSidebar()
let blogs = sidebars['/blogs/']
blogs.unshift(blogs.reverse().pop()??'')

export default defineUserConfig({
  lang: "zh-CN",
  title: "sch246's wiki",
  description: "www",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "sch246/wiki-vue",
    navbar: bar.getNavbar(),
    sidebar: sidebars,
    sidebarDepth: 2,
    // editLink: false,
    editLinkText:'编辑此页',
    docsDir:'docs',
    lastUpdatedText: "最后更新于",
    contributors: false,
    backToHome:'返回首页',
  }),
  markdown:{
    code:{
      lineNumbers:4,
    },
  },
  extendsMarkdown: (md) => {
    const f = md.renderer.rules.text ?? ((tokens, idx)=>tokens[idx].content)
    md.renderer.rules.text = (...args)=>f(...args)
      .replace(/##(.+)##/g, '<cover title="你知道的太多了">$1</cover>')
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),})
  ],
});
