---
sidebar_position: 2
title: 定义
---

## Def 范畴

```
class 范畴 𝒞
    class 𝒞.Obj
        Obj
    class 𝒞.Mor f
        𝒞.Obj f.domain
        𝒞.Obj f.codomain
    class 𝒞.Hom(A, B) f
        𝒞.Mor f
        f.domain = A
        f.codomain = B
    def
        (in 𝒞)
            (in 𝒞.Obj)
        (f: A -> B)
            (f in 𝒞.Hom(A, B))
    if
        𝒞.Obj A, B, C
        f: A -> B
        g: B -> C
        =>
            g*f: A -> C
    if
        𝒞.Mor f, g, h
        =>
            f*(g*h) <=> (f*g)*h
    if
        𝒞.Obj A
        =>
            1_A: A -> A
            𝒞.Mor f, g =>
                1_A*f = f
                g*1_A = g

```