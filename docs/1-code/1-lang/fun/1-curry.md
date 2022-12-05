# 柯里化


## 只是个笔记

- [柯里化的前生今世（一）：函数面面观](https://zhuanlan.zhihu.com/p/34060802)

写得真好哇

## 柯里化！

### 值与类型

可以描述的东西都具有信息，确定这东西所需要的信息被记录下来就成了值

从描述东西的信息中截取相同的部分，就成了类型

### 函数类型

函数本身也是值，因此函数也可以具有类型

一般使用函数输入输出的值的类型来定义一个函数的类型

函数可以接收一个或者多个值，并且返回一个值

### 柯里化

如果函数接收了不完整的值会怎么样？

考虑特殊情况，如果我们啥都不填进去，可以认为填进去了 0 个值，显然它依旧是个函数

需要 n 个参数的函数填了 m 个参数，那么就变成了一个需要 n-m 个参数的函数

因此函数应该可以一个一个地填参数，每次填参数都能得到一个新的函数，直到填进最后一个参数，运行，得到一个值

最终的值，与一次填完后得到的值，应该是一样的，这种对函数的处理就是柯里化。。大概。

我在网上找到了几个说法

> 总之，柯理化是把一个多元函数，转换成一系列更少元函数的处理方法。
>
> https://zhuanlan.zhihu.com/p/355859667

> 柯里化，用一句话解释就是，把一个多参数的函数转化为单参数函数的方法。
>
> https://blog.csdn.net/Crazypokerk_/article/details/97674338

> 柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
>
> https://baike.baidu.com/item/%E6%9F%AF%E9%87%8C%E5%8C%96/10350525

## 高阶函数

> 事实上，Currying指的是这样的一个高阶函数，
>
> ```
> curry :: ((a, b) -> c) -> (a -> b -> c)
> ```

