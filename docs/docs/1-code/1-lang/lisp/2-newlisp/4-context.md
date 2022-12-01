# 上下文


视频:http://nuevatec.nfshost.com/manual-intro.mov

所有符号(`symbols`)可以分离到不同命名空间，叫做上下文(`context`)

每个上下文都有私有的符号表

```
;; context:symbol
FRUIT:apple
STOCK:apple
```

上下文被用于构建模块(`modules`)，有着独立的变量(`variable`)和函数定义

上下文可以被复制

并且动态分配给变量

或者作为参数传递(symbols函数)

上下文通过符号识别

都是MAIN上下文(`MAIN context`)的一部分

newLISP每次运行都会自动创建MAIN上下文

## 创建上下文

```
> (context 'FOO)
FOO
FOO> (set 'x 123)
123
FOO> (set 'y 456)
456
FOO> (symbols)
(x y)
FOO> (context MAIN)
MAIN
> FOO:x
123
>
```

> \> (context 'FOO)

`'`是必须的

> FOO\> (context MAIN)

切换回MAIN

> \> FOO:x

从外面引用上下文中的内容

## 在另一个上下文中使用同样的符号

```
> (context 'FOO_BAR)
FOO_BAR
FOO_BAR> (set 'x 777)
777
FOO_BAR> FOO:x
123
FOO_BAR> x
777
FOO_BAR>
```

完全限定的符号

- <hover><out>CONTEXT</out><in>FOO_BAR</in></hover>:<hover><out>symbol</out><in>x</in></hover>

> (set **'**FOO_BAR:x 555)

在上下文名字前使用`'`

```
> (delete 'WORLD)
true
> (set 'WORLD:greeting "Hello!")
"Hello!"
> (context? WORLD)
true
> WORLD:greeting
"Hello!"
>
```

> \> (delete 'WORLD)

确保不存在`WORLD`

### 上下文中使用的符号也可以在MAIN中使用

```
> (set 'x "MAIN's string")
"MAIN's string"
> FOO_BAR:x
555
> FOO:x
123
> x
"MIAN's string"
>
```

上下文拥有的符号只有在带有上下文名称(`context name`)前缀的情况下才能访问

```
FOO> MAIN:x
"MAIN's string"
FOO> FOO_BAR:x
555
FOO> x
123
FOO>
```

当函数`load`、`eval-string`或`sym`被调用时，

`context`函数告诉 newLISP 把符号(`symbols`)和定义('definitions')放在哪里

``` my_prog.lsp
;;; file MY_PROG.LSP
;;
;; everythong from here on goes into GRAPH
(context 'GRAPH)

(define (draw-triangle x y z)
    (...))

(define (draw-circle)
    (...))

;; show the runtime context, which is GRAPH
    (define (foo)
        (context))

;; switch back to MAIN
(context 'MAIN)

;; end of file
```

> (define (draw-triangle x y z)

这些函数和变量只有 `GRAPH` 知道

上下文符号是全局的

内建函数，以及类似 `nil` 和 `true` 的符号，在所有上下文都是可见的

## 全局变量

让一个符号在任何位置都可见，使用`global`函数

```
> (set 'var 123)
123
> (global 'var)
var
> (context 'FOO)
FOO
FOO> var
123
FOO>
```

没有`global`，FOO中访问`var`时会返回`nil`

如果FOO已经有了`var`符号，则会返回该符号的值，而不是全局的`var`的值

只有MAIN中的符号才能变为全局变量

一旦变为全局变量，将无法被隐藏

### 覆写全局对象和内置对象

```
(context 'Account)

(define (Account:new ...)
    (...))

(context MAIN)
```

> (define (Account:new ...)
>
>     (...))

内置函数`new`被这个定义覆写了

以做一个完全不同的函数

且仅在这个上下文中生效

## 引用上下文的变量

```
> (set 'FOO:x 123)
123
> (set 'ctx FOO)
FOO
> ctx:x
123
> (set 'ctx:x 999)
999
> FOO:x
999
>
```

当用`new`创建上下文，或者为未实例化的上下文写函数时，

使用到了上下文变量

上下文变量还允许对表示为上下文的大型数据对象进行引用传递



### 创建或加载上下文的顺序，会导致意想不到的结果

```
;; demo - file for loading contexts
(context 'FOO)
    (set 'ABC 123)
(context MAIN)

(context 'ABC)
    (set 'FOO 456)
(context 'MAIN)
```

> (set 'FOO 456)

FOO导致了错误，而ABC没有

为什么？

当加载第一个上下文时，第二个上下文还未加载，于是创建了局部变量

当加载第二个上下文时，第一个已经作为全局保护变量加载了

> (set 'ABC:FOO 456)

通过显式添加前缀来规避


总是在模块的上下文(`context`)语句之前加载*所需的*模块

总是以切换回MAIN上下文来结束

这些能让模块的*值*和*函数*能安全地被访问

:::tip

既然上下文符号以大写显示

小写可能会用到的符号

:::

