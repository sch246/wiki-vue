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

## 注册Github

略

## 创建仓库

::: details 你可以使用万能的 VSCode 创建本地仓库

进入你想要发布的东西所在的目录，或者创建一个新目录，然后

![初始化本地仓库](https://s2.loli.net/2022/12/06/5UJPnX61zGtFSLR.png)

##如果它不可点击，你可以多点几下，VSCode就能反应过来了##

这会创建`.git`文件夹

接下来随便新建点东西并且 commit 存到本地仓库

git 会自动检测文件夹下的全部变化，你可以通过 VSCode直接看到它们

![commit](https://s2.loli.net/2022/12/06/qzAoVpxNlaXBDHm.png)

如果没有更改被标记，点击 commit 可以一步到位标记并提交全部更改

但是如果想仅提交一部分更改的话，你可以点击后面的`+`来标记哪些更改需要被提交

![加](https://s2.loli.net/2022/12/06/CYJuriIMbnq7LBz.png)

它就会显示在暂存列表中

![暂存](https://s2.loli.net/2022/12/06/6Y5SEoKGvWPgXd7.png)

随后即使这个文件再次被更改了，新的更改也不会和之前的混淆

![不混淆](https://s2.loli.net/2022/12/06/XYDbZPtFfJs3UzG.png)

此时点击 commit，就只会提交被标记的更改，而不是全部

每次 commit 都需要给这次提交写些东西，那个框就是给你输入更改消息的

如果点击了 commit 但是没写内容，会弹出个文件，编辑下第一行输入消息，再关掉就行了

![](https://s2.loli.net/2022/12/06/Yc8lkJisnfeSwdr.png)

当全部 commit 后看起来大概会是这样

![发布](https://s2.loli.net/2022/12/06/PWx4yhlqkfHKa9e.png)

然后就可以取个名字直接发布了，默认的仓库名是这个文件夹的名字，当然你也可以更改

![发布到Github](https://s2.loli.net/2022/12/06/2wphasYMKWgdfe6.png)

选公共仓库的话所有人都能查看这个页面，否则只有你能看到

如果不知道怎么选，选公共的就行了##(不然你用Github还有什么意义)##

私有或公共属性可以随时更改

发布后的页面是这样的

![就绪](https://s2.loli.net/2022/12/06/bThZoODAYIUtpN3.png)

随后每次更改，可以 add 且 commit 到本地仓库(选中且存档)，然后 push 到 Github 来应用更改

当然你也可以一键应用

![一键更改](https://s2.loli.net/2022/12/06/4d7zp2qEHybuhfn.png)

:::

::: details 也可以使用 Github 的客户端创建

![创建](https://s2.loli.net/2022/12/06/fiIK9ldSZTN5B48.png)

- New repository: 在本地新建仓库，指用 git 初始化一下
    - 它会在目标目录下创建个新目录，所以不必新建文件夹，path 写父目录就好
- Add local repository: 添加本地已经存在的仓库，指已经用 git 初始化过的目录
- Clone repository: 从网络(包括 Github)下载仓库到本地
    - 你用客户端登录了 Github 的话可以看到自己的仓库列表

如果已经在 Github 创建了仓库，可以选择 clone

如果在本地使用了`git init`，可以选择 add local repository

否则可以使用 New repository 创建一个新的仓库

这里选择新建仓库

![新建仓库](https://s2.loli.net/2022/12/06/VRPQkUIB6bq3aZM.png)

- Name 直接决定了将要创建/选择的文件夹名
- Description 是描述，我这里就随便写写了
- local path 是本地地址，选个父目录就行了
    - 在这里，它指向的目录是`D:\sch246.top\test\`
- README 无所谓
    - 勾选的话会额外创建一个README.md文件在仓库根目录，你可以稍后自己创建
- Git ignore 不同的项目类型会生成不同类型的临时文件，这些文件是不希望检测同步的，可以设置`.gitignore`文件来过滤掉
    - 同样可以稍后自己创建
- License 开源协议，可以参考[知乎 - 开源协议是什么？有哪些？如何选择？](https://zhuanlan.zhihu.com/p/351930045)
    - 如果不设置的话，即使代码放到了 Github 上，他人也不敢使用，这不利于推广##，并且该偷的照样偷##

我在这里原来只有一个`my-website`目录，其它的都是 Github 客户端往里面添加的

![](https://s2.loli.net/2022/12/06/kg4frJBWRmNoaUO.png)

然后就可以直接发布了

![2022-12-07-GitHubDesktop_5n.png](https://s2.loli.net/2022/12/07/vbnWGwChAm9I2aV.png)

![](https://s2.loli.net/2022/12/07/8Et2DN7oea3WdSJ.png)

可以修改仓库的名字和描述

注意一般需要取消勾选`Keep this code private`，否则只有你能看到

如果不知道怎么选，选公共的就行了##(不然你用Github还有什么意义)##

这些东西都可以随时更改

发布后的页面是这样的

![就绪](https://s2.loli.net/2022/12/07/cDlR9C34F1fuZO8.png)

git 会自动检测文件夹下的全部变化，你可以通过 Github 客户端直接看到它们，并且选择勾选哪些内容

![commit](https://s2.loli.net/2022/12/07/Vw74xHEPXaFp8hR.png)

它可以精确到行

![2022-12-07-GitHubDesktop_5m.png](https://s2.loli.net/2022/12/07/K5IgMkAPjofVeS9.png)

点击 commit 可以把所有选中的更改存档到本地仓库

![commit](https://s2.loli.net/2022/12/07/QSpREG9OTMjYV4n.png)

每次 commit 都需要给这次提交写些东西，如果只有一个文件更改，那么可以生成默认内容，否则必须自己写些东西

当本地仓库有更改时，可以使用 push

作用是将本地的仓库同步到 Github

![](https://s2.loli.net/2022/12/07/qaQyIzr6DUhJwMG.png)

如果更改了 Github 的仓库而本地没有更改，点击 push 会弹出这样的窗口

![](https://s2.loli.net/2022/12/07/LFxICfji9r3qSvP.png)

这意味着需要先 fetch 进行同步

然后才能 push

![](https://s2.loli.net/2022/12/07/6IHpcF8fg1G3Smb.png)

:::

