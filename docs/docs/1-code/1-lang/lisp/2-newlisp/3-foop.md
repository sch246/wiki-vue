# 函数式面向对象编程


视频:http://nuevatec.nfshost.com/what-the-foop-H264.mov

FOOP.

## What is FOOP?

foop，就是如何在newlisp里面向对象编程
(foop, is how you do oop in newlisp)

在foop里，对象是列表(`list`)，类是上下文(`context`)
(in foop, objects are `lists`, and classes are `contexts`.)

上下文(`context`)，从MAIN上下文(`MAIN context`)中分割函数(`functions`)和变量(`symbols`)
(contexts, seperate functions and symbols from the MAIN context)

上下文能直接通过`context`函数创建，或者间接通过`define`或`set`函数创建
(contexts can be create directly with the context function, or indirectly through define or the set functions)

```
> (setq SomeClass:count 0)
0
> (context? SomeClass)
true
> (define (AnotherClass:attributes) (rest (self)))
(lambda () (rest (self)))
> (context? AnotherClass)
true
> ;;constant, hoever, cannot be used this way
> (constant 'PaperClip:brand "Acme")

ERR: symbol not in current context in function constant : PaperClip:brand
> (context? PaperClip)
nil
```

对象的第一个属性，是它的类(`class`)
(and object's first attribute, is it's class)

newLISP有一个预定义的上下文叫做类(`class`)
(there's a pre-defined context in newLISP named class)

？？？
(class defines the foo constractor)

使用new函数继承其它类
(classes inherits from other classes using the function `new`)

新的类用typing(？)创建
(new classes are created by typing)

```
> (new Class 'SomeClass)
SomeClass
```

这创建了一个`SomeClass`类
(this created a class named `SomeClass`)

`SomeClass`继承了`Class`的所有定义(？)
(`SomeClass` inherits evrything defineding(?) the `Class`)

...

设置一些属性
(make some attributes)

```
> (new Class 'SomeClass)
SomeClass
> (new SomeClass 'AnotherClass)
AnotherClass
> ;; once a class inherits from another, no link remains:
> (setq SomeClass:count 0)
0
> AnotherClass:count
nil
> ;; to reflect the changes, use new again:
> (new SomeClass 'AnotherClass true)
AnotherClass
> ;; adding true overwrites existing symbols
> AnotherClass:count
0
> ;; there's still no connection between the classes:
> (setq SomeClass:count 9)
9
> AnotherClass:count
0
```

对于继承，FOOP使用`Mixins`
(for inherits, FOOP uses `Mixins`)

show limites

...

## 上下文

你可以在MAIN中定义简单的类
(You can difine simple classes within MAIN)

但是，对于更复杂的类，请在上下文中定义它们
(But, for more complex classes, define them in the context)

```
> (context 'ComplicatedClass)
ComplicatedClass
ComplicatedClass> (new Class)
ComplicatedClass
ComplicatedClass> (define (method-a))
(lambda ())
ComplicatedClass> (define (method-b))
(lambda ())
ComplicatedClass> (define (method-c))
(lambda ())
ComplicatedClass> ;; ...
ComplicatedClass> (define (method-z))
(lambda ())
> (context MAIN)
MAIN
>
```

让我们创建一些类
(let's create a class, look ...

并生成一些对象
(and make a cup of objects)

```
> (new Class 'SomeClass)
SomeClass
> SomeClass:SomeClass
(lambda () (cons (context) (args)))
> (SomeClass)
(SomeClass)
> (SomeClass 1 2 3)
(SomeClass 1 2 3)
>
```

`SomeClass`很有趣(？)，我们用`Points`来代替
(Sinse `SomeClasses` very interesting, let's make some `Points` instead)

```
> (new Class 'Point)
Point
> (Point 10 20)
(Point 10 20)
> (Point)
(Point)
> (define (Point:Point (x 0) (y 0)) (list (context) x y))
> (Point)
(Point 0 0)
> (Point 10 20)
(Point 10 20)
> (define (Point:move x y) (setf (self 1) x (self 2) y) (self))
(lambda (x y) (setf (self 1) x (self 2) y) (self))
> (setq pt (Point))
(Point 0 0)
> (:move pt 10 20)
(Point 10 20)
> (:move pt 15 25)
(Point 15 25)
> pt
(Point 15 25)
> (define (Point:slide dx dy) (++ (self 1) dx) (++ (self 2) dy) (self))
(lambda (dx dy) (++ (self 1) dx) (++ (self 2) dy) (self))
> (:slide pt 15 25)
(Point 30 50)
> (:slide pt 15 25)
(Point 45 75)
> (:slide pt -5 -5)
(Point 40 70)
>
```

### 让我们再看一遍

(let's take a little of that again)

```
(new Class 'Point)
```

这个创建了一个`Point`类
(This creates a Point class)

```
(cons (context) (args))
```

继承了`class`类的构造器(`constructor`)
(Point, inherits the default constructor from the class)

```
(define (Point:Point (x 0) (y 0))
    (list (context) x y)
)
```

这里，我们覆写了所继承的构造器
(here, we overwrite the constructor we inherits)

这样做是为了为点x和y属性提供默认值
we do this to supply default values for points x and y attributes

```
(define (Point:move x y)
    (setf (self 1) x (self 2) y)
    (self)
)
```

这定义了一个移动`Point`对象的方法
(this defines a method to move point objects around)

`(self 1)` `(self 2)`

根据它们的位置访问对象的属性
(where Accessing the object's attributes based on their position)

x 是 1, y 是 2
(x is 1 and y is 2)

也可以用名称索引，我们稍后会看到
(we can also use `name indexes`, and we'll see later)

```
(setq pt (Point))
```

它创建了一个有默认x和y值的点对象

并且赋值给了变量`pt`

```
(:move pt 10 20)
```

这里我们带着参数`10 20`，发送`:move`消息给`pt`

`:`操作符表示我们如何发送消息给对象

```
(define (Point:slide dx dy)
    (++ (self 1) dx)
    (++ (self 2) dy)
    (self)
)
```

这个定义了`slide`方法以滑动`Point`对象

`++`函数用一些值增加整数(?)

在这个例子里， 是点`x`和`y`

现在让我们看向相同的用上下文(`context`)的类(`class`)

```
> (context 'Point)
Point
Point> (new Class)
Point
Point> (constant 'x 1 'y 2)
2
Point> (define (Point:Point (nx 0) (ny 0)) (list (context) nx ny))
(lambda ((nx 0) (ny 0)) (list (context) nx ny))
Point> (define (move nx ny) (setf (self x) nx (self y) ny) (self))
(lambda (nx ny) (setf (self x) nx (self y) ny) (self))
Point> (define (slide dx dy) (++ (self x) dx) (++ (self y) dy) (self))
(lambda (dx dy) (++ (self x) dx) (++ (self y) dy) (self))
Point> (context MAIN)
MAIN
Point> (Point)
(Point 0 0)
> (:move (Point) 10 20)
(Point 10 20)
> (setq pt (:move (Point) 10 20))
(Point 10 20)
> (:slide pt 15 25)
(Point 25 45)
> (:slide pt 15 25)
(Point 40 70)
>
```

大多数情况，代码是不能直接访问的，或者通过slide进行改变

> 后面听不懂。。。

(define (move `nx` `ny`)
    (setf (self **x**) `nx` (self **y**) `ny`)
    (self)
)

> 大意是需要重命名避免冲突

这就是为什么我们定义 x 和 y 为常数

```
(constant 'x 1 'y 2)
```

现在我们已经在定义这个构造器(constructor)时写了Point `:`(发送)Point 

> 听不懂

我们可以看到`move`和`slide`函数末尾有个`(self)`函数

这是必需的

> 还是听不懂

```
> (new Class 'Point)
Point
> (new Class 'Rectangle)
Rectangle
> (define (Rectangle:move center) (setf (self 3) center))
(lambda (center) (setf (self 3) center))
> (setq r (Rectangle 23 54 (Point 35 74)))
(Rectangle 23 54 (Point 35 74))
> (:move r (Point 30 40))
(Point 30 40)
> ;; (Point 30 40) 不是我们期望的，现在我们让它返回自身
> (define (Rectangle:move center) (setf (self 3) center) (self))
(lambda (center) (setf (self 3) center) (self))
> (:move r (Point 3 4))
(Rectangle 23 54 (Point 3 4))
> ;; that's more like it
>
```

## end

现在，我们学习了FOOP
- 对象(objects)
- 类(classes)
- 构造器(constructors)
- 方法定义(method definitions)
- 方法调用(method sending)
- 对象访问(object accessing)

我们讲的这些就是FOOP

关于它还有很多可学习的

。。。

Functional Object Oriented Programming

- Fun
- Free
- Funky
- Functional

Bye now!