---
sidebar_position: 1
title: 定义
---

    A是一个Int <=> A is a Int
    <=> A = Int() <=> Int A
    [<=> A in Int <=> A ∈ Int]

    A not and B <=> not A or not B <=> (A => not B)


## $Def \quad X=<T>()$

$X = 拓扑空间()$

---

### $<T> = T_{0}空间$

> 设$X$是一个拓扑空间，如果$X$中的任意两个不相同的点中必有一个点有一个开邻域不包含另一个点
>
> 即，如果$x,y \in X,x \ne y$,则或者$x$有一个开邻域$U$使得$y \notin U$,或者$y$有一个开邻域$V$使得$x \notin V$
>
>则称拓扑空间$X$是一个$T_{0}$空间

```
x != y
and
    x in X
and
    y in X
then
    x not in y.开邻域()
    or
        y not in x.开邻域()
```

---

### $<T> = T_{1}空间$

> 设$X$是一个拓扑空间，如果$X$中的任意两个不相同的点中每一个点都有一个开邻域不包含另一个点
>
> 即，如果$x,y \in X, x \ne y$, 则$x$有一个开邻域$U$使得$y \notin U$
>
> 则称拓扑空间$X$是一个$T_{1}$空间

```
x != y
and
    x in X
and
    y in X
then
    x not in y.开邻域()
```

---

### $<T> = (T_{2}空间 \quad or \quad Hausdorff空间)$

> 设$X$是一个拓扑空间，如果$X$中任何两个不相同的点各自有一个开邻域使得这两个开邻域互不相交
>
> 即，如果$x,y \in X, x \ne y$, 则点$x$有一个开邻域$U$, 点$y$有一个开邻域$V$,使得$U \cap V = \emptyset$
>
> 则称拓扑空间$X$是一个$Hausdorff空间$，或$T_{2}$空间

```
x != y
and
    x in X
and
    y in X
then
    x.开邻域() not and y.开邻域()
```

---

### $<T> = 正则空间$

> 设$X$是一个拓扑空间，如果$X$中的任何一个点和任何一个不包含这个点的闭集都各有一个开邻域，它们互不相交
>
> 即，如果$x \in X$和$A \subset X$是一个闭集，使得$x \notin A$ ,则存在$x$的一个开邻域$U$和$A$的一个开邻域$V$使得$U \cap V = \emptyset$
>
> 则称拓扑空间$X$是一个正则空间

```
x not in A
and
    x in X
and
    A = X.闭集()
then
    x.开邻域() not and A.开邻域()
```

---

### $<T> = 正规空间$

> 设$X$是一个拓扑空间，如果X中的任何两个互不相交的闭集各有一个开邻域并且这两个邻域互不相交
>
> 即，如果$A,B \subset X$都是闭集，$A \cap B = \emptyset$ ，则存在$A$的一个开邻域$U$和$B$的一个开邻域$V$使得$U \cap V = \emptyset$
>
> 则称拓扑空间$X$是一个正规空间

```
A not and B
and
    A = X.闭集()
and
    B = X.闭集()
then
    A.开邻域() not and B.开邻域()
```

---

### $<T> = T_{3}空间$

> 正则的$T_{1}$空间称为$T_{3}$空间

```
X = T1空间
and
    X = 正则空间()
```

---

### $<T> = T_{4}空间$

> 正规的$T_{1}$空间称为$T_{4}$空间

```
X = T1空间
and
    X = 正规空间()
```