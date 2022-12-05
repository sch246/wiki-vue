import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
// import {sideBarValue} from './ts/gen_sidebars'
// import {navbar} from './ts/gen_navabars'

import autoBar from "vuepress-auto-bar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "sch246's wiki",
  description: "www",
  head: [["link", { rel: "icon", href: "/images/logo.ico" }]],
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "sch246/wiki-vue",
    navbar: autoBar.navbar,
    sidebar: autoBar.sidebar,
    sidebarDepth: 0,
    editLink: false,
    lastUpdatedText: "最后更新于",
    contributors: false,
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
});

// function defaultText(tokens, idx){
//   let str = tokens[idx].content
//   return (/[&<>"]/.test(str))
//   ?  str.replace(/[&<>"]/g, (ch)=> ({
//       '&': '&amp;',
//       '<': '&lt;',
//       '>': '&gt;',
//       '"': '&quot;'
//     }[ch]))
//   : str;
// }

