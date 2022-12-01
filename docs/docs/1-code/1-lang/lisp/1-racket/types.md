# 数据类型


## 整理自

- [文江博客 - Scheme语言简明教程](https://www.wenjiangs.com/doc/7sgl4nzz)

## 简单数据类型

- Booleans: 布尔值，`#t`，`#f`
    - 返回自身
    - 使用`boolean?`判断类型
    - 任何非`#f`的值都会看作`#t`
    - 使用`not`取反
- Numbers: 数字类型
    - 返回自身
    - <type\>
        - `integer`: `42`
        - `rational`: `22/7`
        - `real`: `3.14`
        - `complex`: `2+3i`
        - `number`
    - 布尔值不是数字类型
    - 使用`<type>?`判断类型，小的类型属于更大的类型
    - 使用`eqv?`判断通用相等，使用`=`判断数字相等
    - `+,-,*,/,expt,max,min,abs`等可以使用，其中`-`和`/`在只有1个参数时分别得到相反数和倒数
- Caracters: 字符类型，字符加`#\`前缀
    - 返回自身
    - 一些非可视字符:`#\newline`, `#\tab`, `#\` or `#\space`
    - 使用`char?`判断类型
    - 使用`char<type>?`进行字符比较
        - <type\>: `=`, `<`, `>`, `<=`, `>=`
        - 使用`char-ci`替换`char`进行忽略大小写的比较
    - 使用`char-downcase`或`char-upcase`转化为小写或大写
    - 这里的分号不会当成注释
- Symbols: 变量类型，或者说变量标识
    - 它返回的是变量标识所代表的值，而非变量标识本身
        - 若要返回标识本身，使用`quote`，或者其简化`'x` <=> `(quote x)`
            - 返回标识不需要其有定义
    - 使用`symbol?`判断类型
    - 由字符串命名，允许`-$!#*<+>`等乱七八糟的符号，以下是在racket中的测试
        - 不能包含分号(会被当成注释)
        - 不能包含双引号(会被当成字符串)
        - 不能是其它类型的形式(引用时会被当成其它类型)
            - 可以和关键字冲突，但是之后就用不了这个关键字了
            - 可以包含单引号，但是可能会搞出bug
    - Scheme 除了字符串外都不区分大小写，但是 Racket 是大小写敏感的
    - 使用`set!`改变值
        - 经测试在Racket中再次使用`define`也能改变值
## 复合数据类型

- Strings: 字符串
    - 由字符组成的序列
    - 使用`string?`判断类型
    - 可以由`"<string>"`表示，它返回自身
        - 这里的分号不会当成注释
        - 可以向`string`传递一组字符以返回字符串
        - 使用`(make-string <len>)`创建`\u0000`组成的空字符串
    - 使用`(string-ref <string> <index>)`进行索引，不支持负数
        - 使用`(string-set! <string> <index> <char>)`进行字符修改
    - 使用`string-append` 进行字符串拼接，支持超过2个的字符串
- Vectors: 向量
    - 可以由任意类型的元素组成的序列，包括 Vector 本身
        - 不要求其中的元素类型一致
    - 使用`vector?`判断类型
    - 可以由`#(<elem> ...)`表示，它返回自身且不经过求值
        - 可以向`vector`传递一组值以返回向量，注意，这里会进行可能的求值
        - 使用`(make-vector <len>)`创建0组成的向量
    - 使用`(vector-ref <vector> <index>)`进行索引，不支持负数
        - 使用`(vector-set! <vector> <index> <char>)`进行向量修改
- Dotted pairs(点对) 和 Lists(列表)
    - 可以由任意类型的元素组成的序列
        - 不要求其中的元素类型一致
        - 列表是  末尾是空列表的嵌套的点对
    - 使用`pair?`, `list?`, `null?`判断点对，列表，空列表
    - 它不返回自身，未定义的行为将会报错
        - 可以由`'(<elem1> . <elem2>)`返回点对
            - 可以向`cons`传递2个值以返回点对
        - 可以由`'(<elem> ...)`返回列表
            - 可以向`list`传递一组值以返回列表
        - `'(1 2 3 . 4)`<=>`'(1 . (2 . (3 . 4)))`
        - `'(1 2 3 4)`<=>`'(1 . (2 . (3 . (4 . ()))))`<=>`(list 1 2 3 4)`<=>`(cons 1 (cons 2 (cons 3 (cons 4 '()))))`
    - 使用`car`或`cdr`访问点对的前一个或后一个元素
        - 使用`set-car!`或`set-cdr!`修改点对的前一个或后一个元素
            - 然而在racket内未定义
        - 使用`caar`, `cddr`, `caddr`等简化连续的`cdr`和`car`访问
            - `(car (cdr y))`<=>`(cadr y)`
            - 最多4级
    - 使用`list-ref`返回列表索引处的元素
        - 使用`list-tail`返回列表索引后的全部剩余元素

## 类型转换

- `A->B`
    - 字符与整型: `char->integer`, `integer->char`
        - 按照ascii码值互转
    - 字符串与列表与向量
    - 数字与字符串: `string->number`, `number->string`
        - 按照字面值互相转换
            - 如果失败返回#f
        - 第二个是可选参数可以填进制
            - 数字表示始终是十进制的
            - `string->number`: 以几进制读取字符串
            - `number->string`: 将数字转换为几进制的字符串
                - 与上一个不同，只有2,8,10,16的选项
    - 变量标识与字符串: `string->symbol`, `symbol->string`

## 其它数据类型

- 过程(procedure): 就和函数一样
    - 原始过程(系统过程)
        - `display`, `con`, `+`等等
    - 自定义过程
        - *待续*
- port端口
    - 端口是为输入输出提供执行的通道，通常会和文件和控制台操作相关联
    - (display "Hello World!" `(current-output-port)`)

## S-expressions(S表达式)

所有这些数据类型可以统一成一种通用的叫作s-expressions(符号表达式或s-表达式)的数据类型(可能是s : sign)