# 冷知识

## 赋值表达式

python 使用海象运算符`:=`来表示赋值表达式

在python3.8以后的版本中生效

## readline

它可以为python的命令行界面提供补全，以及方向键的支持

```sh
# windows
pip3 install pyreadline3
# linux
pip3 install readline
```

如果linux安装不上，可以看[python交互式命令行不能使用方向键](/blogs/2023-01-24-python命令行不能使用方向键.md)

它也可以让`input()`支持方向键，需要显式 import

```py
import readline
while True:
    print(eval(input('>>> ')))
```

这样可以简单地模拟一个 python 命令行））

## 运行代码

这应该是热知识了。。

python 除了`eval()`可以解析表达式之外，还有`exec()`用于解析运行代码块

用法基本一致

`exec()`同样具有`__globals`和`__locals`参数

如果仅输入1个参数，那么行为将接近模块

如果2个都输入，那么行为将接近类，这意味着你不能使用类似递归的行为

## 变量字典

python可以用`globals()`和`locals()`来获取全局变量字典和局部变量字典

其中，`globals()`是实际的变量字典，而`locals()`只是引用变量字典的内容

这意味着往`globals()`内添加键将创建变量，而往`locals()`内添加键则不会

当在全局作用域使用`locals()`时，行为与`globals()`一致