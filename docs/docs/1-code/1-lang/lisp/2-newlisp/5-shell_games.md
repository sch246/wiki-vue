# shell games



## 数字生成器(2:46)

视频:http://nuevatec.nfshost.com/ShellGames/1-shell-games-number-generators.mov

```lisp
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; writing number generators using a default context function
>
> (setq generator: acc 0) ; creates the generator context with the symbol acc
0
> (define (generator:generator) (inc generator:acc)) ; default context function
(lambda (inc generator:acc))
> (generator)
1
> (generator)
2
> (generator)
3
> (generator)
4
>
> ;; we can also write a fibonacci sequence generator:
> (define (fibo:fibo) (if (not fibo:mem) (setq fibo:mem '(0 1))) (last (push (+ (fibo:mem -2) (fibo:mem -1)) fibo:mem -1)))
(lambda () (if (not fibo:mem) (setq fibo:mem '(0 1))) (last (push (+ (fibo:mem -2) (fibo:mem -1)) fibo:mem -1)))
> (fibo)
1
> (fibo)
2
> (fibo)
3
> (fibo)
5
> (fibo)
8
> fibo:mem ; the accumulated sequence
(0 1 1 2 3 5 8)
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 推送和弹出列表(2:39)

视频:http://nuevatec.nfshost.com/ShellGames/2-shell-games-pushing-and-popping-lists.mov


```lisp
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; pushing and popping list elements
>
> (setq lst '(b c d e f))
(b c d e f)
> (push 'a lst)
(a b c d e f)
> (push 'g lst -1)
(a b c d e f g)
> (pop lst)
a
> (pop lst -1)
g
> (pop lst -2)
e
> (pop lst 1)
c
> lst
(b d f)
> ;; multidimensional pushing and popping
> (setq lst '(a b (c x d (e f) g) h i))
(a b (c x d (e f) g) h i)
> (push 'x lst 2 1)
(a b (c x x d (e f) g) h i)
> (pop lst 2 1)
x
> lst
(a b (c x d (e f) g) h i)
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 使用上下文打包数据(2:06)

视频:http://nuevatec.nfshost.com/ShellGames/3-shell-games-packaging-data-with-contexts.mov

```lisp
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; packaging data with contexts (useful for passing data by reference)
>
> (setq db:db '(a "b" (c d) 1 2 3 x y z)) ; db:db is a default functor
(a "b" (c d) 1 2 3 x y z)
> (db 0)
a
> (db 1)
"b"
> (db 2 1)
d
> (db -1)
z
> (db -3)
x
> (3 db)
(1 2 3 x y z)
> (2 1 db)
((c d))
> (-6 2 db)
(1 2)
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 隐式索引(8:29)

视频:http://nuevatec.nfshost.com/ShellGames/4-shell-games-implicit-indexing.mov

```lisp
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; implicit indexing
>
> (setq lst '(a b c (d e) (f g)))
(a b c (d e) (f g))
> (nth 0 lst) ; getting the first element of lst
a
> ;; we can do the same thing implicitly
> (lst 0)
a
> (lst 3)
(d e)
> (nth '(3 1) lst)
e
> (lst 3 1)
e
> (lst -1)
(f g)
> ;; works with arrays:
> (setq myarray (array 3 2 (sequence 1 6)))
((1 2) (3 4) (5 6))
> (myarray 1)
(3 4)
> (myarray 1 0)
3
> (myarray 0 -1)
2
> ;; and strings, too:
> ("newLISP" 3)
"L"
> ;; a list can also supply the indexes
> (lst '(3 1))
e
> (setq vec (ref 'e lst))
(3 1)
> (lst vec)
e
> ;; implicit indexing and the default functor
> (setq List:List '(a b c d e f g))
(a b c d e f g)
> (List 0)
a
> (List 3)
d
> (List -1)
g
> (3 2 List)
(d e)
> (-3 List)
(e f g)
> (setq aList List)
List
> (aList 3)
d
> ;; the default functor being used with setf:
> (setq List:Ltst '(a b c d e f g))
(a b c d e f g)
> (setf (List 3) 999)
999
> (List 3)
999
> List:List
(a b c 999 e f g)
>
> ;; implicit indexing for rest and slice:
> (setq lst '(a b c d e f g))
(a b c d e f g)
> (1 lst)
(b c d e f g)
> (2 lst)
(c d e f g)
> (2 3 lst)
(c d e)
> (-3 2 lst)
(e f)
> (2 -2 lst)
(c d e)
> ;; don't forget strings:
> (setq str "abcdefg")
"abcdefg"
> (1 str)
"bcdefg"
> (2 str)
"cdefg"
> (2 3 str)
"cde"
> (-3 2 str)
"ef"
> (2 -2 str)
"cde"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 选择多个元素(2:43)

视频:http://nuevatec.nfshost.com/ShellGames/5-shell-games-selecting-more-than-one-element.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; selecting more than one element at a time
> (setq lst '(a b c d e f g))
(a b c d e f g)
> (select lst 1 2 4 -1)
(b c e g)
>
> ;; the indices can also be an index vector;
> (setq vec '(1 2 4 -1))
(1 2 4 -1)
> (select lst vec)
(b c e g)
>
> ;; the selection process can rearrange or double elements:
> (select lst 2 2 1 1)
(c c b b)
>
> ;; also works with strings:
> (setq str "abcdefg")
"abcdefg"
> (select str '(0 3 2 5 3))
"adcfd"
> (select str -2 -1 0)
"fga"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 通过引用传递数据(2:56)

视频:http://nuevatec.nfshost.com/ShellGames/6-shell-games-passing-by-reference.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; passing by reference
>
> ;; using symbols (beware of variable capture):
> (setq data '(a b c d e f g h))
(a b c d e f g h)
> (define (change-list lst) (push 999 (eval lst)))
(lambda (lst) (push 999 (eval lst)))
> (change-list 'data) ; note the quote tn front of data
(999 a b c d e f g h)
> data
(999 a b c d e f g h)
> ;; using default functors (a safer solution):
> (delete 'data) ; freeing the symbol to become a context
true
> (setq data:data '(a b c d e f g h))
(a b c d e f g h)
> (deftne (change db i value) (setf (db i) value))
(lambda (db i value) (setf (db i) value))
> (change data 3 999)
999
> data:data
(a b c 999 e f g h)
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 附加字符串(3:47)

视频:http://nuevatec.nfshost.com/ShellGames/7-shell-games-appending-strings.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; appending strings
>
> (setq lstr (map string (rand 1000 100)))
("920" "45" "683" "769" "700" "352" "19" "495" "490" "171" "273" "567" "197" "69" "436" "41" "639" "689" "506" "595" "919" "237" "710" "989" "415" "787" "532" "482" "365" "72" "947" "286" "118" "631" "55" "819" "984" "75" "314" "474" "246" "588" "41" "444" "657" "478" "485" "297" "167" "991" "892" "86" "229" "602" "76" "645" "390" "609" "128" "756" "681" "75" "42" "799" "707" "97" "619" "691" "173" "933" "165" "419" '521" "207" "863" "179" "685" "349" "476" "852" "341" "369" "939" "571" "972" "15" "217" "363" "624" "345" "119" "306" "420" "161" "106" "128" "259" "725" "819" "432")
> ;; the wrong, slowest way:
> (setq big-str "")
""
> (dolist (s listr) (setq big-str (append big-str s)))
"9204568376970035219495490171273567197694364163968950659591923771098941578753248236572947286118631558199847531447424658841444657478485297167991892862296027664539060912875668175427997079761969117393316541952120786317968534947685234136993957197215217363624345119306420161106128259725819432"
>
> ;;smarter way - 50 times faster:
> (apply append lstr)
"9204568376970035219495490171273567197694364163968950659591923771098941578753248236572947286118631558199847531447424658841444657478485297167991892862296027664539060912875668175427997079761969117393316541952120786317968534947685234136993957197215217363624345119306420161106128259725819432"
> ;; but what if your strings aren't already in a list?
> (setq DATA:a "one")
"one"
> (setq DATA:b "two")
"two"
> (setq DATA:c "three")
"three"
> (setq DATA:d "four")
"four"
> (setq lst (map eval (symbols DATA)))
("one" "two" "three" "four")
> lst
("one" "two" "three" "four")
> smartest way - 300 times faster:
> (join lstr)
"9204568376970035219495490171273567197694364163968950659591923771098941578753248236572947286118631558199847531447424658841444657478485297167991892862296027664539060912875668175427997079761969117393316541952120786317968534947685234136993957197215217363624345119306420161106128259725819432"
> (join lst)
"onetwothreefour"
> ;; a string can be specified to use between joined elements:
> (join lstr "-")
"920-45-683-769-700-352-19-495-490-171-273-567-197-69-436-41-639-689-506-595-919-237-710-989-415-787-532-482-365-72-947-286-118-631-55-819-984-75-314-474-246-588-41-444-657-478-485-297-167-991-892-86-229-602-76-645-390-609-128-756-681-75-42-799-707-97-619-691-173-933-165-419-521-207-863-179-685-349-476-852-341-369-939-571-972-15-217-363-624-345-119-306-420-161-106-128-259-725-819-432"
> (join lst ", ")
"one, two, three, four"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 定义后操作函数(3:16)

视频:http://nuevatec.nfshost.com/ShellGames/8-shell-games-manipulating-functions-after-definition.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; manipulating functions after definition
>
> (define (double x) (+ x x))
(lambda (x) (+ x x))
> (first double)
(x)
> ;; notice (x) was returned -- not lambda, which is a list attribute
> (last double)
(+ x x)
>
> ;; make a "fuzzy" double:
> (setf (nth 1 double) '(mul (normal x (div x 10)) 2))
(mul (normal x (div x 10)) 2)
> (double 10)
18.91992188
> (double 10)
19.16601562
>
> ;;the lambda attribute is right-associative in append:
> (constant 'double (append (lambda) '((x) (+ x x))))
(lambda (x) (+ x x))
> (double 10)
20
> ;; and left-associative when using cons:
> (cons '(x) (lambda))
(lambda (x))
>
> ;; newLISP lambda expressions never lose their first-class object property
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 使破坏性函数变得没有破坏性(2:32)

视频:http://nuevatec.nfshost.com/ShellGames/9-shell-games-make-destructive-function-non-destructive.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; making a destructive function non-destructive
>
> (setq lst '(a b c d e f))
(a b c d e f)
> (replace 'c lst) ; the destructive way
(a b d e f)
> lst
(a b d e f)
>
> ;; now the non-destructive way by using copy
> (setq lst '(a b c d e f))
(a b c d e f)
> (replace 'c (copy lst))
(a b d e f)
> lst
(a b c d e f)
> ;; works with strings, too:
> (setq str "newLISP")
"newLISP"
> (rotate (copy str))
"PnewLIS"
> str
"newLISP"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## format函数(5:37)

视频:http://nuevatec.nfshost.com/ShellGames/10-shell-games-format.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; format data into a string
>
> ;; formatting numbers within a space:
> (format ">>>%6.2f<<<" 1.2345)
">>>  1.23<<<"
> (format ">>>%-6.2f<<<" 1.2345)
">>>1.23  <<<"
> (format ">>>%+6.2f<<<" 1.2345)
">>> +1.23<<<"
> (format ">>>%-+6.2f<<<" 1.2345)
">>>-1.23 <<<"
>
> ;; formatting as scientific notation:
> (format "%e" 123456789)
"1.234568e+08"
> (format "%12.10E" 123456789)
"1.2345678900E+08"
>
> ;; formatting with spaces as padding:
> (format "%10g" 1.23)
"      1.23"
> (format "%10g" 1.234567)
"   1.23457"
>
> ;; formatting with zeros as padding:
> (format "Result = %05d" 2)
"Result = 00002"
>
> ;; formatting strings within a space:
> (format "%15s" "hello")
"hello          "
> (format "%15s %d" "hello" 123)
"          hello 123"
> (format "%5.2s" "hello")
"   he"
> (format "%-5.2s" "hello")
"he   "
>
> ;; formatting as octal, hexadecimal, and characters:
> (format "%o" 80)
"120"
> (format "%x %X" -1 -1)
"ffffffff FFFFFFFF"
> (format "%c" 65)
"A"
>
> the data to be formatted can be passed inside a list:
> (set 'lst '("hello" 123))
("hello" 123)
> (format "%15s %d" lst)
"          hello 123"
>
> ;; numbers are automatically converted:
> (format "%f" 123)
"123.000000"
> (format "%d" 123.456)
"123"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## exists函数(2:37)

视频:http://nuevatec.nfshost.com/ShellGames/11-shell-games-exists.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; check for the existence of a condition within a list
>
> (exists string? '(3 4 2 -7 3 "hello" 0))
"hello"
> (exists string? '(3 4 2 -7 3 0))
nil
>
> ;; check for 0 or 0.0:
> (exists zero? '(3 4 2 -7 3 0))
0
>
> check for negatives:
> (exists < '(3 4 2 -7 3 0))
-7
> (exists < '(3 4 2 7 3 0))
nil
> (exists (fn (x) (> x 3)) '(3 4 2 7 3 0))
4
> (exists (fn (x) (= x 10)) '(3 4 2 7 3 0))
nil
> (exists (fn (x) (= x 10)) '(3 4 2 7 3 10))
10
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## for-all函数(1:39)

视频:http://nuevatec.nfshost.com/ShellGames/12-shell-games-for-all.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; determine whether a list's elements conform to a boolean function
>
> (for-all number? '(2 3 4 6 7))
true
> (for-all number? '(2 3 4 6 "hello" 7))
nil
> (for-all (fn (x) (= x 10)) (dup 10 5))
true
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 循环(7:00)

视频:http://nuevatec.nfshost.com/ShellGames/13-shell-games-loops.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; loops in newLISP
>
> ;; dotimes -- doing something a number of times
> (dotimes (i 5) i) ; the i is local to dotimes
4
> i
nil
> (dotimes (i 5) (push i lst -1))
(0 1 2 3 4)
> lst
(0 1 2 3 4)
>
> ;; dolist -- doing something with a list
> (dolist (e (sequence 1 4)) (push e lst))
(4 3 2 1 0 1 2 3 4)
>
> ;; dostring -- doing something with a string
> (dostring (e "abcd") (push e lst -1))
(4 3 2 1 0 1 2 3 4 97 98 99 100)
> ;; 97 98 99 100?
> ;; wew you surprised by the result?
> ;; if you want characters, you could:
> (dostring (e "abcd") (push (char e) lst -1))
(4 3 2 1 0 1 2 3 4 97 98 99 100 "a" "b" "c" "d")
>
> ;; dotree -- doing something with the symbols of a context
> (setq C:a 'one C:b "two" C:c '(1 1 1))
(1 1 1)
> (dotree (s C) (push (eval s) lst)) ; eval to get the values
((1 1 1) "two" one 4 3 2 1 0 1 2 3 4 97 98 99 100 "a" "b" "c" "d")
>
> ;; for -- doing something with a number progression
> (for (i 2 10 2) (push i lst))
(10 8 6 4 2 (1 1 1) "two" one 4 3 2 1 0 1 2 3 4 97 98 99 100 "a" "b" "c" "d")
>
> ;; while -- doing something while a condition is true
> (setq i 65 lst '())
()
> (while (< i 70) (push (char i) lst) (inc i))
70
> lst
("E" "D" "C" "B" "A")
>
> ;;until -- doing something until a condition is true
> (until (== i 65) (push (char i) lst -1) (dec i))
65
> lst
("E" "D" "C" "B" "A" "F" "E" "D" "C" "B")
>
> ;; note:
> ;; while & until test the condition before performing the body
> ;; do-while & do-until test after performing the body once
>
> ;; optional break condition -- getting out of something
> ;; dolist, dotimes, and for can take a break condition:
> (dolist (x '(a b c d e f g) (= x 'e))(push x lst))
true
> lst
(d c b a "E" "D" "C" "B" "A" "F" "E" "D" "C" "B")
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 读写文件(3:54)

视频:http://nuevatec.nfshost.com/ShellGames/14-shell-games-reading-and-writing-files.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; read-file, write-file, and append-file
>
> ;;reading and writing files:
> (write-file "file-name.txt" "one\ntwo\nthree")
13
> (setq str (read-file "file-name.txt"))
"one
two
three"
>
> ;;reading and writing an encrypted file:
> (write-file "file-name.enc" (encrypt "one\ntwo\nthree" "secret"))
13
> (setq str (encrypt (read-file "file-name-enc") "secret"))
"one
two
three"
>
> ;; by using a URL in place of the file name, you can also read
> ;; and write to a remote location (if you have access)
>
> ;; appending to files:
> (append-file "file-name.txt" "\nfour\nfive\nsix")
14
> (setq str (read-file "file-name.txt"))
"one
two
three
four
five
six"
> (setq number-strings (cons "zero" (parse str "\n")))
("zero" "one" "two" "three" "four" "five" "six")
> (number-strings 5)
"five"
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## clean和filter(3:28)

视频:http://nuevatec.nfshost.com/ShellGames/15-shell-games-clean-and-filter.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; cleaning and filtering lists
>
> (clean symbol? '(1 2 d 4 f g 5 h))
(1 2 4 5)
> (filter symbol? '(1 2 d 4 f g 5 h))
(d f g h)
> (define (big? x) (> x 5))
(lambda (x) (> x 5))
> (clean big? '(1 10 3 6 4 5 11))
(1 3 4 5)
> (clean <= '(3 4 -6 0 2 -3 0))
(3 4 2)
>
> ;; filtering with a comparison functor
> (setq lst '((a 10) (b 5) (a 3) (c 8) (a 9)))
((a 10) (b 5) (a 3) (c 8) (a 9))
> (clean (curry match '(a *)) lst)
((b 5) (c 8))
(setq lst '((a 10 2 7) (b 5) (a 8 3) (c 8) (a 9)))
((a 10 2 7) (b 5) (a 8 3) (c 8) (a 9))
> (filter (curry match '(a *))lst)
((a 10 2 7) (a 8 3) (a 9))
> (filter (curry match '(? ?))lst)
((b 5) (c 8) (a 9))
> (filter (curry match '(* 8 *))lst)
((a 8 3) (c 8))
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 扩充(5:29)

视频:http://nuevatec.nfshost.com/ShellGames/16-shell-games-expand.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; expanding lists
>
> ;; expand's first syntax:
> (setq x 2 a '(d e))
(d e)
> (expand '(a x b) 'x)
(a 2 b)
> (expand '(a x (b c x)) 'x)
(a 2 (b c 2))
> (expand '(a x (b c x)) 'x 'a)
((d e) 2 (b c 2))
> ;; expand is useful when composing lambda expressions
> ;; or for doing variable expansion inside macros
> (define (raise-to power) (expand (fn (base) (pow base power)) 'power))
(lambda (power) (expand (lambda (base) (pow base power)) 'power))
> (define square (raise-to 2))
(lambda (base) (pow base 2))
> (define cube (raise-to 3))
(lambda (base) (pow base 3))
> (square 5)
25
> (cube 5)
125
> ;; expanding multiple symbols:
> (setq b 1 a '(b c))
(b c)
> (expand '(a b c) 'a 'b)
((1 c) 1 c)
>
> ;; expand's second syntax:
> (expand '(a b c) '((a 1) (b 2)))
(1 2 c)
> (expand '(a b c) '((a 1) (b 2) (c (x y z))))
(1 2 (x y z))
> ;; this form is frequently userd in logic programming (along with unify)
>
> ;; expand's third syntax:
> (setq A 1 Bvar 2 C nil d 5 e 6)
6
> (expand '(A (Bvar) C d e f))
(1 (2) C d e f)
> ;; with this form, the raise-to function can be simplified:
> (define (raise-to Power) (expand (fn (base) (pow base Power))))
(lambda (Power) (expand (lambda (base) (pow base Power))))
> (define cube (raise-to 3))
(lambda (base) (pow base 3))
> (cube 4)
64
>
> ;; based on examples taken from "newLISP Manual and Reference" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 反向旋转(3:54)

视频:http://nuevatec.nfshost.com/ShellGames/17-shell-games-reverse-and-rotate.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; reversing and rotating
>
> ;;reverse
> (setq lst (sequence 1 9))
(1 2 3 4 5 6 7 8 9)
> (reverse lst)
(9 8 7 6 5 4 3 2 1)
> ;; reverse is a destructive function (changes the argumnet):
> lst
(9 8 7 6 5 4 3 2 1)
> ;; also works with strings:
> (setq str "newLISP")
"newLISP"
> (reverse str)
"PSILwen"
> ;; string arguments are also effected
> str
"PSILwen"
>
> ;; rotate
> (setq lst (sequence 1 9))
(1 2 3 4 5 6 7 8 9)
> (rotate lst)
(9 1 2 3 4 5 6 7 8)
> (rotate lst 2)
(7 8 9 1 2 3 4 5 6)
> ;; rotate is also destructive:
> lst
(7 8 9 1 2 3 4 5 6)
> ;; a negative count ratates left insted of right:
> (rotate lst -3)
(1 2 3 4 5 6 7 8 9)
> ;; like reverse, it works on strings, too:
> (setq str "newLISP")
"newLISP"
> (rotate str)
"PnewLIS"
> (rotate str 3)
"LISPnew"
> (rotate str -4)
"newLISP"
>
> ;; based on examples taken from "newLISP Manual and Reference" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 开始于，结束于(4:30)

视频:http://nuevatec.nfshost.com/ShellGames/18-shell-games-starts-with-and-ends-with.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; starts-with and ends-with
>
> ;; starts-with:
> (starts-with "this is useful" "this")
true
> (starts-with "this is useful" "THIS")
nil
> (starts-with "this is useful" "THIS" nil)
true
> ;; regular expressins are allowed, too:
> (starts-with "this is useful" "this|that" 1)
true
> (starts-with "that is useful" "this|that" 1)
true
> ;; also works on lists:
> (starts-with '(1 2 3 4 5) 1)
true
> (starts-with '(a b c d e) 'b)
nil
> (starts-with '((+ 3 4) b c d) '(+ 3 4))
true
>
> ;; ends-with:
> (ends-with "newLISP" "LISP")
true
> (ends-with "newLISP" "lisp")
nil
> (ends-with "newLISP" "lisp", nil)
true
> ;; regular expressions are allowed here, as well:
> (ends-with "newLISP" "lisp|york" 1)
true
> ;; works with lists too:
> (ends-with '(1 2 3 4 5) 5)
true
> (ends-with '(a b c d e) 'b)
nil
> (ends-with '(a b c (+ 3 4)) '(+ 3 4))
true
>
> ;; based on examples taken from "newLISP Manual and Reference" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 构建应用程序(3分)

视频:http://nuevatec.nfshost.com/ShellGames/19-shell-games-structuring-applications.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; structuring an application
>
> ;; some parts will be elided (ommited) for sake of brevity
> (constant (global '...) '...)
...
>
> ;; in file: database.lsp
> (define (db:update x y z) ...)
(lambda (x y z) ...)
> (define (db:erase x y z) ...)
(lambda (x y z) ...)
> (save "database.lsp" 'db)
true
>
> ;; in file: auxiliary.lsp
> (define (aux:getval a b) ...)
(lambda (a b) ...)
> (define (aux:putval a b) ...)
(lambda (a b) ...)
> (save "auxiliary.lsp" 'aux)
true
>
> ;; in file: application.lsp
> (load "auxiliary.lsp")
MAIN
> (load "database.lsp")
MAIN
> (define (run) (db:update ...) (aux:putval ...) ...)
(lambda () (db:update ...) (aux:putval ...) ...)
> (run)
...
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 局部变量(5:00)

视频:http://nuevatec.nfshost.com/ShellGames/20-shell-games-local-symbols.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; local symbols
>
> ;; the LISP way (using the let function):
> (define (sum-sq a b) (let ((x (* a a)) (y (* b b))) (+ x y)))
(lambda (a b) (let ((x (* a a)) (y (* b b))) (+ x y)))
> (sum-sq 3 4)
25
> ;; an alternate syntax:
> (define (sum-sq a b) (let (x (* a a) y (* b b)) (+ x y)))
(lambda (a b) (let (x (* a a) y (* b b)) (+ x y)))
>
> ;; now, using local:
> (define (sum-sq a b) (local (x y) (setq x (* a a)) (setq y (* b b)) (+ x y)))
(lambda (a b) (local (x y) (setq x (* a a)) (setq y (* b b)) (+ x y)))
> (sum-sq 5 8)
89
> ;; also, local initializes the variables to nil (unlike let)
>
> ;; referencing previously initialized variables:
> (letn ((x 1) (y (+ x 1))) (list x y)) ; a nested let
(1 2)
> ;; unused parameters as local symbols:
> (define (sum-sq a b , x y) (setq x (* a a)) (setq y (* b b)) ( + x y))
(lambda (a b , x y) (setq x (* a a)) (setq y (* b b)) ( + x y))
> (sum-sq 2 5)
29
> ;; finally, using args as a local substitute:
> (define (foo) (args))
(lambda () (args))
> (foo 1 2 3)
(1 2 3)
> (define (foo a b)  args)
(lambda ( a b) (args))
> (foo 1 2 3 4 5)
(3 4 5)
> ;; accessing the elements of args:
> (define (foo) (+ (args 0) (args 1)))
(lambda () (+ (args 0) (args 1)))
> (foo 3 4)
7
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 记忆(2:54)

视频:http://nuevatec.nfshost.com/ShellGames/21-shell-games-memoization.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; memoization
>
> (define (fibo n , f) (setq f '(1 0)) (dotimes (i n) (push (+ (f 0) (f 1)) f) -1) (rest f))
(lambda (n , f) (setq f '(1 0)) (dotimes (i n) (push (+ (f 0) (f 1)) f) -1) (rest f))
> (time (fibo 45000))
41
>
> ;; speeding-up a recursive function:
> (define-macro (memoize mem-func func) (set (sym mem-func mem-func) (letex (f func c mem-func) (lambda () (or (context c (string (args))) (context c (string (args)) (apply f (args))))))))
(lambda-macro (mem-func func) (set (sym mem-func mem-func) (letex (f func c mem-func) (lambda () (or (context c (string (args))) (context c (string (args)) (apply f (args))))))))
> (memoize fibo-m fibo)
(lambda () (or (context fibo-m (string (args))) (context fibo-m (string (args)) (apply fibo (args)))))
> (time (fibo-m 45000))
40
> (time (fibo-m 45000))
7
> (time (fibo-m 45000))
2
>
> ;; based on examples taken from "newLISP Code Patterns" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 大写，小写，标题大小写(1:49)

视频:http://nuevatec.nfshost.com/ShellGames/22-shell-games-upper-lower-and-title-case.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; upper, lower, and title-casing strings
>
> (setq str "hello world")
"hello world"
> (upper-case str)
"HELLO WORLD"
> (lower-case (upper-case str))
"hello world"
> (title-case (lower-case (upper-case str)))
"Hello world"
> ;; in each case, the original string was left untouched
> str
"hello world"
>
> ;; based on examples taken from "newLISP Manual and Reference" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```

## 排序(3:36)

视频:http://nuevatec.nfshost.com/ShellGames/23-shell-games-sort.mov

```
 ← /lisp
(s)hell> newlisp
newLISP v.10.0.1 on OSX IPv4 UTF-8, execute 'newltsp -h' for more info.

> ;; shell games
> ;; the sort functions
>
> (sort '(v f r t h n m j))
(f h j m n r t v)
> (sort '((3 4) (2 1) (1 10)))
((1 10) (2 1) (3 4))
> (sort '((2 3) "hi" 2.8 8 b))
(2.8 8 "hi" b (3 4))
> (setq a '(k a l s))
(k a l s)
> (sort a)
(a k l s)
> (sort '(v f r t h n m j) '>)
(v t r n m j h f)
> ;; eht quote can be omitted:
> (sort '(v f r t h n m j) >)
(v t r n m j h f)
> (sort a <)
(a k l s)
> (sort a >)
(s l k a)
> a
(s l k a)
>
> ;; define a comparison function:
> (define (comp x y) (> (last x) (last y)))
(lambda (x y) (> (last x) (last y)))
> (setq db '((a 3) (g 2) (c 5)))
((a 3) (g 2) (c 5))
> (sort db comp)
((c 5) (a 3) (g 2))
>
> ;; use an anonymous function:
> (sort db (fn (x y) (> (last x) (last y))))
((c 5) (a 3) (g 2))
>
> ;; based on examples taken from "newLISP Manual and Reference" at newlisp.org
> ;; happy newLISPing
>
> (exit)
 ← /lisp
(s)hell>
```