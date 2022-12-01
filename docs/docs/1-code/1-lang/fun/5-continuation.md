# continuation


## 只是个笔记

- [柯里化的前生今世（七）：first-class continuation](https://zhuanlan.zhihu.com/p/34064549)
- [柯里化的前生今世（八）：尾调用与CPS](https://zhuanlan.zhihu.com/p/34064655)

写得真好哇

## Continuation

> 它的表现形式好像是一个“坑”，它可以看成一个“有去无回”的单参函数。

### 后续计算

```lisp 小例子
(+ 1 (* 2 3))
```

怎么算？`2 * 3` 得到 `6` , `1 + 6` 得到 `7`

注意这里加法用到了乘法的结果

更加详细点，可以分成这几步

- 计算 `1 + (..)`, 遇到表达式，需要一个值填入表达式的位置以继续运行
- 标记表达式的位置，求值表达式
- 计算 `2 * 3` 得 `6`
- 将表达式的值放入表达式的位置，继续运行
- 计算 `1 + 6` 得 `7`

`程序运行到表达式` -(求值)> `解析表达式`

`表达式结果` -(返回值)> `程序继续运行`

continuation 在某表达式要被求值时创建，它标记了表达式的位置用于继续运行，并且等待一个参数

它是一个函数，可以定义为`(返回值)->程序继续运行`

当表达式求值完毕时，调用 continuation 以继续运行程序

非常显然，解析嵌套的表达式需要递归，而 continuation 接管了递归的归，它是整个程序在这个表达式眼中的样子

> 程序的未来，就是这个单参函数。

## first-class

> 在所有语言中，我们都可以引入continuation这个概念，
>
> 但是Lisp更强大，它们的continuation是first-class的。

> 某个东西是first-class的，就是说这个东西可以当做函数的参数，也可以当做函数的返回值。

> Racket提供了call/cc，来拿到(call/cc ...)表达式本身的continuation

```lisp title="例子0"
(+ 1 (call/cc
      (lambda (cont)
        (cont 2))))   ; 3
```

> 结果是`3`，其中`cont`就是`(call/cc ...)`这个表达式的 continuation，

就是这个函数

```lisp
(define cont
  (lambda (x)
    (+ 1 x)))
```

这个函数的返回值就是整个程序的返回值，没有归，归被 continuation 接管了

### 语法

>- `call/cc`接受一个单参函数`fn`作为参数。
>这里`fn`指的就是上面的`(lambda (cont) ...)`
>- 求值`(call/cc ...)`表达式，会使用`(call/cc ...)`表达式的 continuation 调用`fn`。
>因此，`fn`的形参`cont`就是`(call/cc ...)`表达式的 continuation。
>- 另外，我们规定，`fn`的 continuation 就是`call/cc`的 continuation。
>即，如果`fn`中没有调用`cont`，则`(call/cc ...)`的值就是函数的返回值。

```lisp title="例子1"
(+ 1 (call/cc
      (lambda (cont)
        2)))    ; 3
```

它的结果也是`3`

### 继续！

```lisp title="例子2"
((call/cc (lambda (cont) cont)) (lambda (x) "hi"))   ; "hi"
```

它的结果是`"hi"`

continuation 是个时空隧道！是个传送门！

![](https://s2.loli.net/2022/07/28/xaJtjPXBpQg8vmc.png)

当对应的表达式被求值时，就产生了一个`未知的数据`要返回，此时产生了一个 `cont`，程序在这个地方暂停，`call/cc` 让程序在另一个世界线上继续运行，直到使用 `cont` 调用一个对象，即运行 `cont(var)`，将数据传输回原来的世界线

就将那个对象作为那个`未知的数据`返回，程序从暂停的位置继续运行

就`例子2`而言，因为`cont`没有被立即调用，在一个虚拟的世界线中，形成了`(cont (lambda (x) "hi"))`，拉来了函数`(lambda (x) "hi")`，于是这里的世界线变成了`((lambda (x) "hi") (lambda (x) "hi"))`，最后输出了`"hi"`

传送门背后是一个被暂停的世界

### 下一个例子

```lisp title="例子3, 阴阳谜题"
(let* [(yin ((lambda (foo) (newline) foo)
             (call/cc (lambda (bar) bar))))
       (yang ((lambda (foo) (display "*") foo)
              (call/cc (lambda (bar) bar))))]
  (yin yang))
```

> 结果会无限输出，
先输出一个星号，换行输出两个星号，换行输出三个星号，等等。

> 这里把值得注意的几个点，重点表述一下，
> - 什么时候`cont`被调用，就相当于对应于这个`cont`的`(call/cc ...)`表达式返回了，
> 并且该`(call/cc ...)`表达式的值，就是用来调用`cont`的值，
> 即，`(cont v)`则`(call/cc ...)`的值就是`v`。
> - 不同位置，或者相同位置不同时间调用的`(call/cc ...)`产生的 continuation 是不同的，不同的`cont`被调用，会返回到“历史上”的某个位置。

## call/cc的威力

> 我们知道很多动态语言有generator这个概念，
>
> 伴随generator有一个yield，很诡异。
>
> 它居然可以让一个函数返回多次，没错，它无非就是continuation嘛。

=_=

大概，，是在函数内用 cont 保存函数的状态并且放在 next函数 内返回，然后外面调用这个 next函数 时也使用同样的手段？

当前的 cont 就相当于返程票，执行后能穿越回当前世界线

感觉和goto有点像，但是它保存的是函数整个执行状态，带着数据在世界线中跳跃

![](https://s2.loli.net/2022/07/29/ACfQuhqiMRHOp2P.png)

## 尾调用优化

函数末尾调用另一个函数，那么后一个函数返回时，前一个函数已经没有需要执行的东西了

此时不必返回到前一个函数，而是返回到前一个函数返回的地方

前一个函数的环境已经不需要了

因此调用后一个函数时，调用栈可以不增加，直接废弃前一个函数的调用环境即可

> 这个语言特性，称为尾调用优化（tail call optimization）。

import Cover from '@site/src/components/cover/main';

<Cover>尾调用优化使得 lisp 可以用递归写循环而不用担心溢出</Cover>

## 调用栈和调用图

调用栈之所以是调用栈，是因为函数的调用与返回机制，恰好可以用帧（frame）的压栈和弹栈来描述。

尾调用优化动摇了它

`call/cc`根本上改变了它

![](https://pic1.zhimg.com/80/v2-fe4f369ec3c287b75e28c710accccc64_720w.jpg)

> 然而，发生跳转时的状态还不能丢弃，因为有可能再跳回来。

似乎，，跳出来后如果把 `cont` 销毁的话就不能跳回去了

## CPS

> CPS是一种程序的书写风格，经常作为编译器的一种中间表示。（IR

IR，，

```
; 调用风格
(define (f x)
  (+ (g x) 1))

(define (g x)
  (* x 2))

(f 1)

; CPS
(define (f x cont)
  (g x (lambda (v)
         (cont (+ v 1)))))

(define (g x cont)
  (cont (* x 2)))

(f 1 display)
```

简而言之就是认为函数调用后不能自己返回了，所以显式传入一个`cont`

> 除此之外，我们还发现，CPS是一个尾调用形式，
因此程序的执行就变成了continuation的不断变换生长。

以下略