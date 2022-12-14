---
sidebar_position: 1
title: $$l^{p}空间$$
---

## 元素

$p$次方可和的无穷数列全体(有限数列你可以认为后面全是$0$嘛)

$l^p=\left\{ x=\{\xi_k\}:\mathop{\sum}\limits_{k=1}^\infty|\xi_k|^p<\infty  \right\}$

当$p=∞$时，是有界数列全体:

$l^∞=\left\{ x=\{\xi_k\}:|\xi_k|<\infty  \right\}$

## 范数

$||x||_p=\left( \mathop{\sum}\limits_{k=1}^\infty |\xi_k|^p\right)^\frac{1}{p}$

可以看到与元素的定义有高度的一致性，只是加了个$\frac{1}{p}$次方

## 理解

可以理解为无穷维实数空间$\mathbb{R}^∞$上的元素

- $如果: x=(x_1,x_2,x_3,...)\in\mathbb{R}^∞$
    - $如果: ||x||_p<∞，即( \mathop{\sum}\limits_{k=1}^\infty |x_k|^p)^\frac{1}{p}<∞$
        - $若p\ne∞，那么\mathop{\sum}\limits_{k=1}^\infty |x_k|^p<∞，即x\in l^p$
        - $若p=∞，那么Sup_k|x_k|<∞，|x_k|<∞，即x\in l^∞$
    - $如果x\in l^p，即\mathop{\sum}\limits_{k=1}^\infty |x_k|^p<∞$

$x=(x_1,x_2,x_3,...)$