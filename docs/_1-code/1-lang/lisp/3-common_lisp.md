# Common Lisp


## 实用 Common Lisp 编程

这是参考书名，w，仅供参考

### 自我编程

> Common Lisp中最接近格言的是一句类似禅语的描述：“可编程的编程语言。”虽然隐晦了一些，但这句话却道出了Common Lisp至今仍然雄踞其他语言之上的最大优势。Common Lisp比其他任何语言都更加遵循一种哲学一一凡利于语言设计者的也利于语言使用者。这就意味着，当使用Common Lisp编程的时候，你永远不会遇到这种情况：语言里刚好缺乏某些可能令程序更容易编写的特性，因为正如你将在本书中看到的，你可以为语言添加任何想要的特性。

> 完全从手工生成代码的好处很有限——构造列表和构造字符串的工作量大致相同。尽管如此，真正的优势在于可通过处理现有数据来生成代码。这就是Lisp宏的本意，

### 编程语言的动态与静态之分

> 至少对某人来说，这个观点很可能有争议。静态和动态类型的信仰之争在编程领域由来已久。如果你信奉C++和Java（或者是诸如Haskell和ML的静态类型函数式编程语言),并且拒绝生活在没有静态类型检查的坏境里，你可能会就此合上本书了。不过，在此之前，你最好先查查“静态类型偏执狂”  [......] 在他们的博客(http://www.artima.com/weblogs/viewpost.jsp？thread=4639和http://www.mindview.net/WebLog/log-0025)上是怎样自我描述的。另一方面，信奉SmaIITalk、Python、Perl或者Ruby的人们应该会对Common Lisp的这方面感觉良好。

### Lisp圣经

> 事实上，到了20世纪80年代早期，几家AI实验室和Lisp机厂商都提供了他们自己的Lisp实现，众多的Lisp系统和方言让DARPA开始担心Lisp社区可能走向分裂。为了应对这些担忧，一个由Lisp黑客组成的草根组织于1981年成立，旨在结合既有Lisp方言之所长，定义一种新的称为Common Lisp的标准化Lisp语言。最后，他们的工作成果记录在了 Guy Steele 的 *Common Lisp the Language*（*CltL*，Digital press，1984年）一书里，该书相当于Lisp的圣经。

### 现代而高效

> 到1986年的时候，首批Common Lisp实现诞生了，它们是在Common Lisp试图取代的那些方言的基础上写成的。1996年，美国国家标准学会(ANSI)发布了一个建立在CLtL之上并加以扩展的Common Lisp标准，其中增加了一些主要的新特性，包括CLOS和状况系统。但事情还没结束：跟此前的CLtL一样，ANSI标准有意为语言实现者保留一定的空间，以试验各种最佳的工作方式。一个完整的Lisp实现将带有丰富的运行时坏境，并提供GUI微件、多线程控制和TCP/IP套接字等。今天的Common Lisp则进化得更像其他的开源语言——用户可以编写他们所需要的库并开放给其他人使用。在过去的几年里，开源Lisp库领域尤为活跃。
>
> 所以，一方面，Lisp是计算机科学领域的“经典语言"之一，构建在经过时间考验的各种思想之上。另一方面，它完全是一门现代的通用语言，其设计反映了尽可能高效可靠地求解实际问题的实用主义观点。Lisp“经典”遗产的唯一缺点是，许多人仍然生活在片面的Lisp背景之下，他们可能只是在McCarthy发明Lisp以来的近半个世纪中的某些特定时刻接触到了这门语言的某些方面。如果有人告诉你Lisp只能被解释执行，因此会很慢，或者你不得不用递归来于每件事，那么一定要问问他们究竟在谈论哪种Lisp方言，以及他们是否是在计算机远古时代学到这些东西的。

> 不过，你在第32章可以看到，通过使用适当的（可选）变量声明，一个好的Lisp编译器所生成的机器码，完全可以跟C编译器生成的机器码相媲美。

### 不管怎样你都可以读一读这本书

> 如果你对Common Lisp感兴趣，那么无论是否已经确定要使用它或者只是想一窺其门径，本书都挺适合你的。
>
> 如果你已经学会了一些Lisp，但却难于跨越从学术训练到真实程序之间的鸿沟，那么本书刚好可以帮你走上正途。而另一方面，你也不必带着学以致用的目的来阅读本书。
>
> 如果你是个顽强的实用主义者，想知道Common Lisp相比perl、Python、Java、C和C#这些语言都有哪些优势，那么本书应该可以提供一些思路。或者你根本就没打算使用Lisp——可能是因为已经确信Lisp并不比已知的其他语言更好，但由于不熟悉它而无法反驳那些Lisp程序员。如果是这样，本书将给你一个直奔Common Lisp主题的介绍。如果在读完本书以后，你仍然认为Common Lisp赶不上自己当前喜爱的其他语言，那么你将有充分理由来说明自己的观点了。
>
> 我不但介绍了该语言的语法和语义，还讲述了如何使用它来编写有用的软件。在本书的第一部分，我将谈及语言本身，同时穿插一些实践性章节，展示如何编写真实的代码。接着，在我阐述了该语言的绝大部分内容后——包括某些在其他书里往往留给你自己去考查的内容，将给出九个更实用的章节，帮助你编写一些中等大小的程序来做一些你可能认为有用的事：过滤垃圾邮件、解析二进制文件、分类MP3、通过网络播放MP3流媒体，以及为MP3目录和服务器提供Web接口。
>
> 读完本书后，你将熟悉该语言的所有最重要的特性以及它们是如何组织在一起的，而且你已经用Common Lisp写出了一些非凡的程序，并且可以凭借自身力量继续探索该语言了。尽管每个人的Lisp之路都有所不同，但我还是希望本书可以帮助你少走些弯路。那么，让我们就此上路吧。

### 未曾设想的联动

[![](https://s2.loli.net/2022/05/11/JCwhLr5ElAjYUGX.png)](https://lispmethods.com/development-environment.html)

![](https://s2.loli.net/2022/05/11/pPQWegV5U6hLqf3.png)

### 似曾相识

![](https://s2.loli.net/2022/05/11/PcjFSbO2eaK3Duz.png)

mcfunction既视感

### 叠括号
[![](http://imagizer.imageshack.us/v2/256x0q90/923/AN5Hhu.png)](http://imageshack.com/a/img923/640/AN5Hhu.png)