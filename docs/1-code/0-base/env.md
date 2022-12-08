# 环境变量

什么是环境变量？

从字面意义理解，就是在[命令行](/1-code/0-base/cmd.md)环境下的变量

被添加到全局环境变量的可执行文件就相当于命令行下的全局变量

## Windows 10

- [Windows 10 环境变量 (用户变量与系统变量)](https://blog.csdn.net/chengyq116/article/details/105900122)

要查看环境变量，可以在命令行输入

:::: code-group
::: code-group-item cmd
```cmd
set
```
:::
::: code-group-item powershell
```powershell
Get-ChildItem env:
```
:::
::::

全局环境变量的名字是`Path`，它是目录列表

windows 执行命令时，除了当前目录，还会去环境变量(包括Path)内寻找可执行文件(`.cmd`,`.exe`)

可以这样查看

:::: code-group
::: code-group-item cmd
```cmd
Path
```
:::
::: code-group-item powershell
```powershell
$env:Path
```
:::
::::

如果要修改全局环境变量，通常的做法是在 windows 搜索栏直接搜索`环境变量`

然后编辑账户的环境变量`Path`，一般就足够了

比如你要添加`<前面的路径>/<程序名>.exe`，那么在`Path`里添加一行`<前面的路径>`

若需要应用，在保存环境变量后，重新打开一个终端，如果无效可以重启电脑

之后，每次在命令行输入

```cmd
<程序名>
```

就能运行对应的 exe 了

::: details 命令行方式(不建议)

也可以用命令行的方式:[setx](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/setx)，但是 windows 命令行的问题很多很不好用

建议安装其他的东西

- [SetEnv](https://www.codeproject.com/Articles/12153/SetEnv)

:::

## linux

TODO: