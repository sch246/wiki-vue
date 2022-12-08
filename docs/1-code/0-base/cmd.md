# 命令行

在windows里看到的黑框框，没有一点图像的那种就是

命令行并不是 windows 独有的，windows 内也不是只有一种命令行

##如果你知道什么是linux，应该也不会来看这个页面##

详细的可以去看 [wiki](https://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2)

## 打开命令行终端

在 windows 内提到命令行，通常指 cmd 或者 powershell

最简单的方式就是在资源管理器的目录那一栏输入`cmd`

![](https://s2.loli.net/2022/12/08/awRd6A2DIgBN9fF.png)

一个黑框框窗口会被打开，这就是一个 cmd 命令行终端

```cmd
Microsoft Windows [版本 10.0.19044.2251]
(c) Microsoft Corporation。保留所有权利。

C:\WINDOWS\System32>
```

前面几行是每次打开都会出现的，不用管

`C:\WINDOWS\System32>`就是你打开终端的那个目录的路径，还会有个闪烁的光标，那就是输入命令的地方

::: details 试一下？

如果想切换目录，你可以使用`cd`命令

```cmd
cd /d D:/bot
```

应该会变成这样

```cmd
C:\Windows\System32>cd /d D:/bot

D:\bot>
```

`cd`也可以输入相对路径，使用`.`表示当前目录，使用`..`表示上一级目录

```cmd
D:\bot>cd .

D:\bot>cd ..

D:\>cd bot

D:\bot>cd ..

D:\>cd ./bot

D:\bot>cd ../bot

D:\bot>
```

如果不添加`/d`，`cd`没办法切换盘符

```cmd
D:\bot>cd C:/

D:\bot>cd /d C:/

C:\>
```

快捷切换盘符也可以这样

```cmd
C:\>d:

D:\bot>
```

不光是`cd`命令，cmd 命令都可以使用`/?`来查看帮助

```cmd
cd /?
```

```cmd
D:\bot>cd /?
显示当前目录名或改变当前目录。

CHDIR [/D] [drive:][path]
CHDIR [..]
CD [/D] [drive:][path]
CD [..]

  ..   指定要改成父目录。

键入 CD drive: 显示指定驱动器中的当前目录。
不带参数只键入 CD，则显示当前驱动器和目录。

使用 /D 开关，除了改变驱动器的当前目录之外，
还可改变当前驱动器。

如果命令扩展被启用，CHDIR 会如下改变:

当前的目录字符串会被转换成使用磁盘名上的大小写。所以，
如果磁盘上的大小写如此，CD C:\TEMP 会将当前目录设为
C:\Temp。

CHDIR 命令不把空格当作分隔符，因此有可能将目录名改为一个
带有空格但不带有引号的子目录名。例如:

     cd \winnt\profiles\username\programs\start menu

与下列相同:

     cd "\winnt\profiles\username\programs\start menu"

在扩展停用的情况下，你必须键入以上命令。
```
:::

::: tip
- cmd命令是不区分大小写的
- Windows的路径本来就不区分大小写
- Windows的路径可以使用`/`或者`\`来分割，没有区别
:::

更多的命令可以去看官方文档

- [微软 - Windows 命令](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)

## cmd 与 powershell

- [微软 - 什么是 PowerShell？](https://learn.microsoft.com/zh-cn/powershell/scripting/overview?view=powershell-7.3)

两种命令行在 windows 下都常见，powershell 的能力更强

但是二者的命令并不完全兼容，需要区分

## 运行终端

### [terminal](https://learn.microsoft.com/zh-cn/windows/terminal/install)

Windows 自带的应用商店就可以安装

据说很强很酷炫

- [知乎 - 如何看待 Windows Terminal（Windows 终端）？](https://www.zhihu.com/question/323284458)

### [utools](https://u.tools/)

utools 并不能直接运行终端，但是它能让你非常快地打开终端

![utools-cmd](https://s2.loli.net/2022/12/08/NJueHWCA83yqsRK.png)

![utools-powershell](https://s2.loli.net/2022/12/08/Y35FBcjALSqgNQI.png)

### [VSCode](https://code.visualstudio.com/)

万能的 VSCode 除了能编辑代码外

也自带终端，非常方便

![vsc的终端](https://s2.loli.net/2022/12/08/FQzsIpSbJh86qiO.png)