# 动态作用域与词法作用域


## 只是个笔记

- [柯里化的前生今世（五）：动态作用域](https://zhuanlan.zhihu.com/p/34064286)
- [柯里化的前生今世（六）：词法作用域和闭包](https://zhuanlan.zhihu.com/p/34064446)

写得真好哇


## 动态作用域

> 把S表达式分为3种：符号，自求值表达式，列表（函数定义，函数调用）
>
> - 如果是符号，我们就得去“环境”中查找符号的值。
>
> - 如果是自求值表达式，我们就直接返回它。（我们这里的自求值表达式只有数字
>
> - 如果是函数定义，我们就用一个数据结构把参数和函数体存起来。
>
> - 如果是函数调用，我们就先用实参“扩展”调用时的“环境”，然后让函数体在这个环境中求值。

### 环境 environment

环境是帧（frame）的列表，作为栈使用，可以用帧扩展

### 帧 frame

帧是存储变量的字典，可以用新的键值对扩展

### 求值

> 对一个符号进行求值，就是去环境中查找该符号所对应的值。

伪代码((想peach

```
def (get tar): (env try-each tar)
```

### 函数

struct function (params body)

函数的求值(调用)伪代码）

使用实参(函数定义的参数结合传入的值)扩展环境(函数调用时的环境)

函数体在这个扩展后的环境中求值，结束后回复环境

```
values = get_input()
params, body = get_def()
frm = frame(params, values)
env.push(frm)
ret = eval(body, env)
env.pop()
```

> 因此，我们说环境的具体实现形式是列表，但在数据结构上，它构成了一个栈。
>
> 帧在这种情况下，也成为栈帧（stack frame）。

很显然，如果函数中使用了不在 params 中的变量，那么将会读取到调用函数的环境中的对应变量

这样有利有弊

## 词法(静态)作用域

与动态作用域的不同在于，

如果函数中使用了不在 params 中的变量，会从函数定义的环境中寻找，而不是调用函数的环境。

从实现上

函数结构里要加一个定义函数时的环境

struct function (params body env)

> 当封装的这个函数被调用时，我们会用实参扩展封装下来的这个环境，函数体在这个扩展后的环境中求值。
>
> （注：在动态作用域中，我们用实参扩展的是函数被调用时的环境

### 闭包

> 结合以上的实现，我们看到，闭包只不过是一个数据结构，
>
> 它封装了函数的形参，函数体，以及该函数被定义时的环境。
>
> 并没有什么特别神秘的地方。

### 对象

> 词法作用域和闭包一样可以封装“状态”。

```lisp
; let over lambda
(define obj
    (let ((state 1))
      (list
       (lambda () state)
       (lambda (v) (set! state v)))))

(define obj-get-state (car obj))
(define obj-set-state (cadr obj))

; test
(obj-get-state)  ; 1
(obj-set-state 2)
(obj-get-state)  ; 2
```

### 类

> 它其实是一个对象的工厂函数，每次`new`都创建一个具有独立状态的新对象。

```lisp
; lambda over let over lambda
(define create-obj
    (lambda ()
      (let ((state 1))
        (list
         (lambda () state)
         (lambda (v) (set! state v))))))

(define obj1 (create-obj))
(define obj1-get-state (car obj1))
(define obj1-set-state (cadr obj1))

(define obj2 (create-obj))
(define obj2-get-state (car obj2))
(define obj2-set-state (cadr obj2))

; test
(obj1-get-state)  ; 1
(obj1-set-state 2)
(obj1-get-state)  ; 2

(obj2-get-state)  ; 1
(obj2-set-state 3)
(obj2-get-state)  ; 3
```

### 类的静态变量

> 那么，我们在`create-obj`这个工厂函数之上再加一层闭包`let`好了，

```
; let over lambda over let over lambda
(define let-create-obj
    (let ((hidden 5))
      (lambda ()
        (let ((state 1))
          (list
           (lambda () (+ hidden state))
           (lambda (v) (set! state v)))))))

(define obj1 (let-create-obj))
(define obj1-get-state (car obj1))
(define obj1-set-state (cadr obj1))

(define obj2 (let-create-obj))
(define obj2-get-state (car obj2))
(define obj2-set-state (cadr obj2))

; test
(obj1-get-state)  ; 6
(obj1-set-state 2)
(obj1-get-state)  ; 7

(obj2-get-state)  ; 6
(obj2-set-state 3)
(obj2-get-state)  ; 8
```

- let over lambda

> 我们看到了闭包的表现力，同用一种模式模拟了面向对象语言中的很多概念，
>
> “对象”，“类”，“类的静态变量”，看起来都那么的简洁纯净，
> 当然，只要我们需要，我们还可以
>
> “lambda over let over lambda over let over lambda”，等等。

这似乎可以无限套下去