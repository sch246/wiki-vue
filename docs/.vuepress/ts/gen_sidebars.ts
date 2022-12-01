import * as fs from "fs";
import {walkDir} from './dirs'
import {SidebarConfigObject} from 'vuepress'

const root = 'docs'

var sideBarValue:SidebarConfigObject = {}

var dirs: {[link:string]:Array<string>} = {};
let FILE_MATCH = /^(\d+)-([^.]+)/;
let SKIP_MATCH = /^[._]/

walkDir(root,
  // (stats, n)=>(SKIP_MATCH.exec(n) || !(stats.isDirectory() || FILE_MATCH.exec(n))),
  (stats, n)=>SKIP_MATCH.exec(n),
  (_, link, _0, files)=>{
    // let f =(x:string)=>parseInt(FILE_MATCH.exec(x)??Infinity[1])
    // 生成对象，键是所有目录，值是目录下的文件名(排序好)
    // 保存到dirs
    // dirs[link] = files.sort((a, b)=>f(a)-f(b))
    dirs[link] = files.sort()
  })

function getTarDir(dirLink:string, file:string){
  //根据格式获取目标目录名
  // return dirLink + file.split('-')[1].split('.')[0] +'/'
  if (file.endsWith('.md'))return dirLink + file.slice(undefined, -3)+'/'
  return dirLink + file.split('.')[0].trim()+'/'
}
function getTitle(fileLink:string){
  // 读取文件对应的title(不管是不是md)，找不到则使用处理过的文件名
  let md = fs.readFileSync(root+fileLink,'utf-8')
  let lines = md.split(/\r\n|\n/)
  let meta=lines[0].startsWith('---')
  for (let i in lines){
    let line = lines[i]
    if (parseInt(i)>0&&line.startsWith('---')){
      meta = false
    }
    if (meta)continue
    if (line.startsWith('# ')){
      return line.slice(2).trim()
    } else if (!line.trim()){//如果是空行
      continue
    } else {
      break
    }
  }
  let ls = fileLink.split('/')
  // return ls[ls.length-1].split('-')[1].split('.')[0]
  return ls[ls.length-1]
}

function getLink(dirs, dirLink){
  return dirLink+dirs[dirLink].filter((f)=>f.endsWith('.md'))[0].replace('.md','.html')
}

for (let dirLink in dirs){
  if (dirLink=='/'){
    // 对根目录的特殊处理
    continue
  }
  if (!sideBarValue[dirLink]){
    sideBarValue[dirLink]=[]
  }
  let files = dirs[dirLink]
  for (let i in files){
    let file = files[i]
    let fileLink = dirLink+file

    let tarDir = getTarDir(dirLink,file)
    let tarFiles = dirs[tarDir]
    if (tarFiles){
      // 如果有同名的文件夹，认为指向它，创建目录
      sideBarValue[dirLink].push({
        text: getTitle(fileLink),//当做md文件获取文本，失败则获取文件名
        collapsible:file.endsWith('_'),// 如果以_结尾，则认为它需要折叠
        children:tarFiles.map((f)=>(tarDir+f)),
        ...file.endsWith('.md')?{link:fileLink}:{},//若是md文件，则增加link
      })
      // 并且往里面塞去上一级(本目录)的链接
      if (file.endsWith('.md')){
        if (!sideBarValue[tarDir]){
          sideBarValue[tarDir]=[]
        }
        sideBarValue[tarDir].splice(0,0,{
          text: '../'+getTitle(fileLink),
          link:fileLink
        })
      } else {
        sideBarValue[tarDir].splice(0,0,{
          text: '../',
          link: getLink(dirs, dirLink)
        })
      }
    } else if (file.endsWith('.md')){
      sideBarValue[dirLink].push(fileLink)
    }
  }
}

// 处理根目录
sideBarValue['/']=[
  '/',
  ...sideBarValue['/index/']
]
delete sideBarValue['/index/']

export {sideBarValue, dirs, getTitle}
