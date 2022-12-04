# continuation？


import Cover from '@site/src/components/cover/main';

## 什么是`continuation`？

它是一种流程控制机制，意味着"程序将要进行的计算"，注意，是整个程序的全部后续计算

它破坏了入栈出栈的规则——把调用栈和程序状态打包复制，并且随意跳转

你可以把它理解成一个保存状态的`goto`，或者是一个可以到处传的`return`语句——返回的位置和状态不变

它可以在程序求值表达式的时候创建，并且将等待这个表达式的整个剩余的程序变成一个对象，而这个对象就是`continuation`，缩写为`cont`

在 lisp 中使用 `call/cc` 以获取`cont`，然后传入到它的参数(得是个匿名函数)中，具体的去百度(https://www.cnblogs.com/lsgxeva/p/10155575.html)

在CPS(continuation passing style)中它作为函数的参数传入，并且当成`return`使用

可以实现`return`，尾递归优化，以及`yield`和协程

## 咋实现它呢

