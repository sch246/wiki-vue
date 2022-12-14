# 字典


## 创建

```
d0 = (dict "a" 1 "b" 2 "c" 3 "d" 4)
d1 = {"a":1 "b":2 "c":3 "d":4}
d2 =
    run
    a = 1
    b = 2
    c = 3
    d = 4
    __loc__
```

run的作用是创建局部变量，依次运行，并且返回最后一项

`__loc__`返回当前的局部变量的字典

{}是 dict 的语法糖

d2 只能以字符串作为键

## 取值

```
d = {"a":1 "b":2 "c":3}
print (d "b")  # 2
print (d "b" "c")  # 2 3
print (d 'values)  # 1 2 3
print (d 'keys)    # "a" "b" "c"
print (d 'items)   # ("a" 1) ("b" 2) ("c" 3)
```

和 python 一样，没什么好说的

## 设值

```
d = {}
(d "a") = 1
(d "b" "c") = 2 3
print d  # {"a":1 "b":2 "c":3}
```

## 删值

```
d = {"a":1 "b":2 "c":3 "d":4}
del (d "a" "b")
(d 'del "c" "d")
print d  # {}
```

## 其它方法

略