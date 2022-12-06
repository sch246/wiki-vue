# Github

要了解一个东东，可以先看它的历史

- [知乎 - Github的前世今生](https://zhuanlan.zhihu.com/p/54567173)

Github 基于 git:

- [开源翻译 - Git 10 周年之际，创始人 Linus Torvalds 访谈](https://www.oschina.net/translate/10-years-of-git-an-interview-with-git-creator-linus-torvalds)

- [菜鸟教程 - Github 简明教程](https://www.runoob.com/w3cnote/git-guide.html)

## 基本概念

git 是为了多人协作编写代码而设计的，附带了某种“存档”的功能

理解 git 是如何工作的可以看这个

- [B站 - 十分钟学会正确的github工作流，和开源作者们使用同一套流程](https://www.bilibili.com/video/BV19e4y1q7JJ)

##当然，自己一个人的话 add commit push 一梭子就够用了##

### 本地存储库

当一个文件夹被作为本地仓库时，git 会在里面创建名为`.git`的隐藏文件夹作为标记和存储

它可以将本地仓库内的所有文件和文件夹的状态存档，并随时与目前的文件比较，或者执行还原的操作

若想进行存档，可以使用`add`标记更改，可精确到行

使用`commit`把被标记的更改存档

使用`push`把存档同步到 Github

若删除`.git`，等同于删除存档，同时也意味着这不再是本地仓库，而变回了普通目录

可以配置`.gitignore`文件来忽略一些文件不被检测和存档，这在忽略临时文件时很有必要

- [CSDN - .gitignore配置语法完全版](https://blog.csdn.net/le_17_4_6/article/details/92789993)

::: tip
如果要看到`.git`，勾选资源管理器的`查看->隐藏的项目`

如果删不掉它，可以使用`Shift + Del`
:::

## 连接Github

Github 虽然没有被墙，但是可访问性非常随机

可以通过修改 host 文件来临时访问，如果需要彻底的解决方案，还是要翻墙

- [备份 - Github520](/0-other/5-bak/github520)

其中提供的可以查询 github ip地址 的网址:

- [https://raw.hellogithub.com/hosts](https://raw.hellogithub.com/hosts)

## 创建仓库

::: details 你可以使用万能的 VSCode 创建本地仓库

进入你想要发布的东西所在的目录，或者创建一个新目录，然后

![初始化本地仓库](https://s2.loli.net/2022/12/06/5UJPnX61zGtFSLR.png)

这会创建`.git`文件夹

随便新建点东西并且 commit 存到本地仓库

然后就可以取个名字直接发布了，默认的仓库名是这个文件夹的名字

![发布到Github](https://s2.loli.net/2022/12/06/2wphasYMKWgdfe6.png)

选公共仓库的话所有人都能查看这个页面，否则只有你能看到

私有或公共属性可以随时更改

发布后的页面是这样的

![就绪](https://s2.loli.net/2022/12/06/bThZoODAYIUtpN3.png)

随后每次更改，可以 add 且 commit 到本地仓库(选中且存档)，然后 push 到 Github 来应用更改

![一键更改](https://s2.loli.net/2022/12/06/4d7zp2qEHybuhfn.png)

每次提交需要给这次提交命个名，如果弹出个文件，编辑下第一行输入命名，再关掉就行了



:::

::: details 也可以使用 Github 的客户端创建
:::

::: details 或者去官网上面创建，随后 clone 到本地
:::
