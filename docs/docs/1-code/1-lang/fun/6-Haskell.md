# Haskell


## 只是个笔记

- [柯里化的前生今世（九）：For Great Good](https://zhuanlan.zhihu.com/p/34199018)

hum..?


> 然而，偏见却经常起于片面。
>
> 只学习一种语言，会让我们对事物的同一个侧面产生习惯。
>
> 事实上，我们需要多样化的角度，也需要经常更换思维方式。
>
>
>
> 这对学习新知识很有帮助，
>
> 有些时候，我们理解不了某些概念，很有可能是因为这个概念被描述的不够全面，
>
> 我们经常走到深入思考这一特定描述的误区。
>
> 实际上，我们应该尝试寻找不同的描述方式，换个角度重新审视。

> 现在，为了理解代数数据类型（algebraic data type），多态（polymorphism），参数化类型（parameterized type），类型类（type class），我们要学习Haskell了。

## Haskell Curry

> Haskell是一种通用的，**纯函数式**编程语言，
> 其中包含了很多编程语言研究领域中的新概念。
> Haskell提供了`高阶函数`，`非严格语义（non-strict semantics）`，`静态多态类型`，
> `用户自定义的代数数据类型`，`模式匹配`，`列表解析（list comprehension）`，
> `模块系统`，`monadic IO系统`。

## 方法论

> 学习Haskell是一件困难的事情，会让你想起第一次写程序时的感觉。
>
> 它非常有趣，而且强迫你Think different。

![](https://pic1.zhimg.com/80/v2-4de29164b2f576cc92eb0b2820d6bdbc_720w.jpg)

蓝线:生产力, 红线:自我评价

> Haskell社区中流行着这样一句话，我认为对学习非常有帮助，
>
> Don't sweat the stuff you don't understand immediately. Keep moving!
>
> [（别在不懂的地方打转，先继续读下去！](https://github.com/bitemyapp/learnhaskell/blob/master/guide-zh_CN.md)


> 我觉得这句话说的极好，也是软件相对于其他行业的根本区别。
>
> 编程领域中的很多概念，通常会涉及尚未学到的知识点，
>
> 因此，寄希望于在遇到的那一刻去理解它，几乎是不可能的。
>
> 这就要求我们敢于放弃，先强行建立模糊的印象，等有机会不断的回来再看。

> [Haskell was made by some really smart guys (with PhDs)](http://learnyouahaskell.com/introduction#so-whats-haskell)

- http://learnyouahaskell.com

:::caution 不要安装 Haskell Platform

直接使用 Stack，而不要遵循 Haskell.org 里面的说明。

- https://github.com/bitemyapp/learnhaskell/blob/master/guide-zh_CN.md

[为什么不使用 platform?](https://mail.haskell.org/pipermail/haskell-community/2015-September/000014.html)

:::

- [知乎 - 在Windows上安装Haskell](https://zhuanlan.zhihu.com/p/259393917)