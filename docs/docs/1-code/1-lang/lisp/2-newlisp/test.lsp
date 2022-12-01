(define (run)
    (eval (args)))
(define (o2 l)
    (push (pop l) l 1))
(define (trans lst)
    (cond
        ((not (list? lst)) lst)
        ((not (find (lst 1) '(+ - * / %)))
            (eval lst))
        (true (eval (map trans (o2 lst))))))


(define (f n)
    (lambda (i)
        (++ n i)))