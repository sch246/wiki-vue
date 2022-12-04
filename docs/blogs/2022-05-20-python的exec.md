---
title: python的exec
tags: [python]
date: 2022-05-20T17:00
---

import Cover from '@site/src/components/cover/main';

之前就知道python的eval和exec函数了，不过以为里面的变量得传进去一个字典才能存储，不能直接改外面的变量

不过今天试的时候发现，欸，可以改诶

<!--truncate-->

## exec

### 对全局变量起作用

```python title='t2.py'
class A:
    a=0

exec('''
class B:
    b=22
setattr(A, 'b', 1)
''')

print(A.b)
print(B.b)
```
```python title='result'
1
22
```

看起来相当于把代码片段直接插入

:::caution 下面会提到实际上有例外

:::

```python title='t2.py'
def f(s):
    for i in range(10):
        exec(s)
f('print(i)')
```
```python title='result'
0
1
2
3
4
5
6
7
8
9
```

### 加载文件！

```python
>>> from t2 import *
>>> a
2
# 中间修改t2.py为a=3
>>> from t2 import *
>>> a
2
>>> exec(open('t2.py').read())
>>> a
3
```

由于 `import` 不会重复导入，中间修改了的话就得用 `exec` 加 `open`

> 也可以用`reload()`来加载已加载过的模块，它在 Python 内置库`importlib`内

### 尾递归

```python
s = '''
print(i)
i += 1
if i<10: exec(s)
'''
i = 0
exec(s)
```
```python title='result'
0
1
2
3
4
5
6
7
8
9
```

这样是不是就算把字符串作为函数了）

```python title='t2.py'
print(i)
i += 1
if i<10: exec(open('t2.py').read())
```
```python
>>> i=0
>>> exec(open('t2.py').read())
0
1
2
3
4
5
6
7
8
9
```

### 变量字典

exec有3个参数

```python
def exec(
    __source: str | ReadableBuffer | CodeType,
    __globals: dict[str, Any] | None = ...,
    __locals: Mapping[str, object] | None = ...,
) -> None: ...
```

Python 还有2个非常好用的函数`globals()`和`locals()`

可以用它们获取当前位置的全局变量字典和局部变量字典

```python
dic = {'b':2}
locals().update()
print(b)
```
```python title='result'
2
```

以下2种调用是等价的

```python
exec(code)
```

```python
exec(code, globals(), locals())
```

传入的字典会被解析为变量，在exec内被执行

其中一个是全局变量，一个是局部变量，这意味着**在全局和局部之间的变量不会被传进来**

```python
g=0

def A():
    a=1
    def f():
        b=2
        print(a)
        exec("print(a)")
    f()

A()
```
```python title='result'
1
...
NameError: name 'a' is not defined
```

如果想要读取字典为变量，可以将字典传入，但是这样就覆盖了对应位置的其它变量

如果不想覆盖就得把两个字典拼起来

```python
g=0

def merge_dic(dic0, dic1):
    new_dic = {}
    new_dic.update(dic0)
    new_dic.update(dic1)
    return new_dic

def A():
    a = 1
    d = 4
    dic={'d':'awa'}
    exec('print(g)\nprint(a)\nprint(d)',globals(),merge_dic(locals(),dic))
    print(d)

A()
```
```python title='result'
0
1
awa
4
```

### 不完善的局部

对`locals()`和`globals()`的进一步测试揭示，我之前关于exec不能改变变量的记忆并没有错

而是`locals()`函数与`globals()`函数本身有区别

```python
exec('a=4')
print(a)

def f():
    exec("b=4")
    print(b)
f()
```
```python title='result'
4
...
NameError: name 'b' is not defined
```

由于`exec(code)`相当于`exec(code, globals(), locals())`

它与以下代码是等价的

```python
locals()['a']=4 # 等价于globals()['a']=4
print(a)

def f():
    locals()['b']=4
    print(b)
f()
```

经测试输出相同

经测试在函数内修改`globals()`依旧能在外面检测到对应变量

看起来`locals()`是单向赋值，而全局位置只是把`locals()`定位到了`globals()`

悲

## 获取本模块

并且打印本模块全部变量

```python title='t2.py'
import sys

mod = sys.modules[__name__]
c = mod.__dict__
print(c, type(c))
```
```python title='result'
{'__name__': '__main__', '__doc__': None, '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x0000027BC7373580>, '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>, '__file__': 'd:/bot/yz/t2.py', '__cached__': None, 'sys': <module 'sys' (built-in)>, 'mod': <module '__main__' from 'd:/bot/yz/t2.py'>, 'c': {...}} <class 'dict'>
```

## 打包与解包

参考

- [简书 - python解包 --*args **kwargs](https://www.jianshu.com/p/592cf526b1e6)

python 的任何可迭代对象都支持打包与解包，包括字符串，一般用在赋值的位置

python的打包与解包一般是自动判断的，比如

```python
>>> a,b = '12'
>>> a,b
('1', '2')
>>> a, b, c = [1, 2, 3]
>>> a,b,c
(1, 2, 3)
>>> c,a,b = a,b,c
>>> a,b,c
(2, 3, 1)
>>> k = 4,5,6
>>> k
(4, 5, 6)
```

逗号分隔的多个值会被自动打包为元组

若左边有多个值则比较两边元素数量并进行赋值，数量对不上则报错

真这么简单吗？

```python
>>> [a,b,c] = 11,22,33
>>> a,b,c
(11, 22, 33)
>>> (a,b,c) = (1,2,3)
>>> a,b,c
(1, 2, 3)
>>> a,(b,(c,d)) = (0,(1,(2,3)))
>>> a,b,c,d
(0, 1, 2, 3)
>>> a,(b,c) = 1,2,3
...
ValueError: too many values to unpack (expected 2)
>>> a,b,c = 1,(2,3)
...
ValueError: not enough values to unpack (expected 3, got 2)
>>> ((a,b),) = 1,2 
...
ValueError: too many values to unpack (expected 1)
>>> a,b = ((1,2),)
...
ValueError: not enough values to unpack (expected 2, got 1)
```

:::tip python中为了与括号区分，单元素元组需要在元素后加一个逗号`(foo,)`, 统一地, 元组和列表末尾元素后都可以加逗号,

但空元组和空列表不能，因为没有元素

:::

可以这么理解

Python 将逗号分隔的元素打包为元组

当进行赋值时:

若左边仅1个暴露出的变量，直接赋值

当不能直接赋值时，对两边同时解包(可迭代对象)，数量不一致则报错

一致则依次执行赋值(递归)

事实上，不止是赋值语句，任意需要变量赋值的地方都行

```python
>>> for a, (b,c) in [(1,(2,3)),(4,(5,6))]: 
...     print(f'a:{a}, b:{b}, c:{c}')
... 
a:1, b:2, c:3
a:4, b:5, c:6
```

但是 Python 还不止于此

### `*`表达式

在变量或可迭代对象前面加星号

就像逗号分隔的元素会被打包为元组一样，星号标在可迭代对象前会将其解包为元素

```python
>>> a,b,c = 1,*(2,3)
>>> a,b,c
(1, 2, 3)
>>> a,*(b,c) = 1,2,3
>>> a,b,c
(1, 2, 3)
```

挺直观的

当星号直接放在左边的变量前时，字面意思是把变量解包

但此时变量就是我们要赋值的对象，并不一定存在定义

Python 设定这会将变量看做不定长列表并吃下所有剩余的值

```python
>>> a,*b,c,d = 1,2,3,4,5,6
>>> a,b,c,d
(1, [2, 3, 4], 5, 6)
>>> a,*(b,*c) = 1,2,3,4,5
>>> a,b,c
(1, 2, [3, 4, 5])
```

同理，任意需要变量赋值的地方都行

```python
>>> for a, *args in [(1,2,3),(4,5,6)]:
...     print(f'a:{a}, args:{args}')
... 
a:1, args:[2, 3]
a:4, args:[5, 6]
```



```python
>>> b = (1, 2)
>>> *a, = *b,
>>> a
[1, 2]
```

注意，这样的星号只能在列表或元组内，且一个列表或元组内只能有一个这样的星号

```python
>>> *a = 1,2             
...
SyntaxError: starred assignment target must be in a list or tuple
>>> a = *(1,2)
...
SyntaxError: can't use starred expression here
>>> *a, *b = 1,2
...
SyntaxError: two starred expressions in assignment
```

### 函数, `*` 与 `**`

`*`也经常用在函数的定义和调用中

而且这时候出现了`**`

此时它依旧是起到打包与解包的作用

而`*`对应列表，`**`对应字典

回顾一下，在赋值给`*foo`时，字面意思是给foo解包

但此时foo就是要被赋值的对象，于是把foo看作了不定长列表，并且能接收剩余的全部参数

`*`在 Python 的函数定义中有类似作用，使用`*`可以创建不定长参数的函数

它接收剩余全部输入并打包成元组赋给该形参

`**`则接收剩余全部的`key=foo`形式的输入并打包成字典赋给该形参

这意味着可以在调用函数时使用函数未直接定义的形参名)

而且

一个函数的形参可以类似这样

```python
def foo(a, b=0, *c, d, e=0, f, **g)
```

有默认值的一般参数后面不能有无默认值的一般参数

`*`参数后面的参数只能以`key=foo`的形式输入，只能这样输入的参数有无默认值无所谓

`**`参数后不能有参数

`*`和`**`参数都只能有一个

### 装饰器

`*`在调用函数时依旧有效，而`**`也可以用在函数调用中，它将字典解包为`a=.., b=.., ...`的形式

于是我们就可以调用另一个函数，并接管全部的输入输出

```python
def foo(*args, **kargs):
    print('awa')
    result = bar(*args, **kargs)
    print(result)
    return result
```

这样只是对bar一个函数进行了处理，而且调用时得调用foo而不是bar(大概再加一句bar=foo就行了)

我们可以再定义一个函数，输入函数，输出处理过的函数

```python
def foo(bar):
    def wrapper(*args, **kargs):
        print('awa')
        result = bar(*args, **kargs)
        print(result)
        return result
    return bar

def bar(...):
    ...
bar = foo(bar)
```

这就是一个简单的函数装饰器)

Python 提供了一个语法糖

```python
@foo
def bar(...):
    ...

# 完全等价于

def bar(...):
    ...
bar = foo(bar)
```

当然还有再套一层函数输出一个装饰函数的(记装饰函数的函数为装饰函数)

这样装饰器也能有参数了

以及还有类函数

参考(?)
- [【Python】一文弄懂python装饰器（附源码例子）](https://blog.csdn.net/zhh763984017/article/details/120072425)
- [Python @函数装饰器及用法（超级详细）](http://c.biancheng.net/view/2270.html)

### 字典, `*` 与 `**`

`*`和`**`的含义似乎是把可迭代对象变为由逗号隔开的形式

字典与集合里就有逗号

以下是一个递归合并字典的函数

```python title='https://www.coder.work/article/1283998'
def update_merge(d1, d2):
    if isinstance(d1, dict) and isinstance(d2, dict):
        # Unwrap d1 and d2 in new dictionary to keep non-shared keys with **d1, **d2
        # Next unwrap a dict that treats shared keys
        # If two keys have an equal value, we take that value as new value
        # If the values are not equal, we recursively merge them
        return {
            **d1, **d2,
            **{k: d1[k] if d1[k] == d2[k] else update_merge(d1[k], d2[k])
            for k in {*d1} & {*d2}}
        }
    else:
        # This case happens when values are merged
        # It bundle values in a list, making sure
        # to flatten them if they are already lists
        return [
            *(d1 if isinstance(d1, list) else [d1]),
            *(d2 if isinstance(d2, list) else [d2])
        ]
```

<Cover>这太疯狂了</Cover>

让我解析下

它似乎表明字典内部是类似列表或元组的结构，因为前面报错信息说它只能在列表或元组内

而且，都允许用列表表达式

`**dict`可以在字典内解包，`{**dict}`相当于`dict`，并且后解包的会覆盖前面的，这个函数就用了3个解包

`*dict `相当于`*dict.keys()`，在字典内解包相当于创建集合

这个函数干的事情就是

首先传入的一定是字典

先用d2覆盖d1的键，然后遍历d1,d2的键的集合的交集(也就是共有键)，比较值，相等则取d1，不等则递归

对于第一次之后的递归，传入的是两个字典不等的值

若是字典则继续比较，否则

合并为列表