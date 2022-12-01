import {NavbarConfig } from 'vuepress'
import {dirs, getTitle} from './gen_sidebars'

let navbar: NavbarConfig = []

for (let i in dirs['/docs/']){
    let file = dirs['/docs/'][i]
    let fileLink = '/docs/'+file
    navbar.push({
        text:getTitle(fileLink),
        link:fileLink
    })
}

export {navbar}