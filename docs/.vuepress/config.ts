import {defineUserConfig} from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import {sideBarValue} from './ts/gen_sidebars'
import {navbar} from './ts/gen_navabars'

export default defineUserConfig({
  lang: "zh-CN",
  title: "sch246's wiki",
  description: "www",
  head: [["link", { rel: "icon", href: "/images/logo.ico" }]],
  theme: defaultTheme({
    navbar: navbar,
    logo: "/images/logo.png",
    repo: "sch246/wiki",
    sidebarDepth: 0,
    sidebar: sideBarValue,
  }),
});

