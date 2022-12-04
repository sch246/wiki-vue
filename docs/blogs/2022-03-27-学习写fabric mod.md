---
title: 学习写fabric mod
tags: [mc, fabric]
---
总之并没有java基础的我想学怎么写fabric mod了

动机非常简单：想让mojang添加字符串处理命令和将字符串作为命令执行的命令，但是这个太被动而且不太现实

然后我寻思，这样的一个功能应该不是很难整吧

于是开整

<!--truncate-->

> 为了叙述的流畅性，在事件顺序方面作了一些改变
>
> *话说既然加mod了还有原版模组存在的必要性吗*



首先的第一步就是找教程，分别在b站和fabric的官网找到了教程



- <a href="https://www.bilibili.com/read/cv12104177" target="_blank"
            rel="noreferrer noopener">https://www.bilibili.com/read/cv12104177</a>
- <a href="https://fabricmc.net/wiki/zh_cn:tutorial:commands" target="_blank"
            rel="noreferrer noopener">https://fabricmc.net/wiki/zh_cn:tutorial:commands</a>



IDEA在之前某次想学fabric时已经装好了，不过上次是不知道为啥总是提示java版本太旧

这次解决这个问题了

首先把example mod 用IDEA打开，然后它自动运行gradle，然后弹出错误


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-33.png" alt="" class="wp-image-558" /></figure>


非常好）我记得我发现了出错的原因是JAVA_HOME设置的java8


<figure class="wp-block-image size-large"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-34-1024x270.png" alt="" class="wp-image-559" />
</figure>


注意到每次需要重新设置


<img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-35.png" alt="" class="wp-image-560" />
<img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-36-1024x708.png" alt=""
                class="wp-image-561" />



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-37.png" alt="" class="wp-image-562" /></figure>


重新加载


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-38.png" alt="" class="wp-image-563" /></figure>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-39.png" alt="" class="wp-image-564" />
    <figcaption>记得挂个梯子</figcaption>
</figure>


然后继续按照教程来就好了


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-40.png" alt="" class="wp-image-565" /></figure>


IDEA也可以用插件直接创建fabric mod的开发环境，路径很简洁，东西很少）

虽然不会用不过可以和example mod进行对比

然后关掉IDEA


## vscode


我还是比较喜欢用VSCode来编辑

<a href="https://fabricmc.net/wiki/zh_cn:tutorial:vscode_setup">https://fabricmc.net/wiki/zh_cn:tutorial:vscode_setup</a>


重新整一个example_mod


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-42.png" alt="" class="wp-image-567" /></figure>


安装拓展，那个redhat的安装是真的久我就先安装其他的拓展了，不知道什么时候我回过头看的时候就都安装好了

欸，等等，只要安装一个吗））


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/12AF0_CDKD751YW0.jpg" alt="" class="wp-image-595" />
</figure>


我都安装了欸，算了，能用就不管了


```
./gradlew vscode
./gradlew genSources
```


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/TEMNAZYOUOVTD4ABA27BA5.png" alt=""
        class="wp-image-568" />
    <figcaption>完成后的显示还是挺清爽的，虽然左边显示的文件很多))</figcaption>
</figure>


使用调试，MC可以运行

根据教程，其中fabric.mod.json是入口点，里面存着mod的主要信息，然后指向了

xx.mixin.json (从src/main/resources/下算起，包括拓展名) 和

ExampleMod.java (src/main/java/下算起，默认拓展名是java所以不用包括拓展名) 和

icon.png (从src/main/resources/下算起，包括拓展名)

然后xx.mixin.json指向了ExampleMixin.java，ExampleMixin.java又引用了ExampleMod.java

注意到java内是用"."当目录分隔符的



之前看到IDEA插件创建出来的项目文件夹和文件命名好短，想改id和目录

上群里问了ph-苯，得到的答复是fabric.mod.json里的可以随便改，没地方引用它，只要对应到类上面就行

(注意到java内一个文件一个类，并且类名和文件名得相同)

已经知道了对应关系，然后就开始改


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-43.png" alt="" class="wp-image-569" />
    <figcaption>随便取取名，，也不知道要不要主动避免冲突，主要是class Main感觉有点太大了</figcaption>
</figure>


把名字都改好后，，直接改的时候那个redhat的插件提醒了要不要同步，我直接同意了，没想到它不会自动改fabric.mod.json里的，我又把全局搜索给忘了

测试MC可以运行，顺便改了语言并创建了世界

按照教程试着添加了物品

出来一堆红线


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-51.png" alt="" class="wp-image-588" />
    <figcaption>注释本来是英文，手动改成了中文</figcaption>
</figure>


凭感觉import，反正不要选创建就行了，这里我选择了item，然后看教程把ItemGroup也导入了


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-52.png" alt="" class="wp-image-589" /></figure>


好，可以运行


## 添加命令


接下来看看怎么添加命令(添加命令教程的上面一部分看不懂，直接放进去也运行不了


<figure class="wp-block-image size-large"><a href="https://fabricmc.net/wiki/zh_cn:tutorial:commands#%E6%B3%A8%E5%86%8C%E5%91%BD%E4%BB%A4" target="_blank"
        rel="noopener"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-44-1024x616.png" alt="点击打开页面链接"
            class="wp-image-581" /></a></figure>


hummmm

搞不懂欸

去mcbbs搜了搜


<figure class="wp-block-image size-full"><a href="https://www.mcbbs.net/thread-1258562-1-1.html#pid23355721" target="_blank" rel="noopener"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-45.png" alt="点击打开页面" class="wp-image-582" /></a></figure>


复制下来放到对应的位置后弹出一堆红线

照例凭感觉import，不过优先选Brigadier


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-46.png" alt="" class="wp-image-583" /></figure>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/8NLTAEBQRRCDGL.jpg" alt="" class="wp-image-597" /></figure>


好耶，本来还以为要安装什么东西呢


## 更进一步



<figure class="wp-block-image size-full"><a href="https://fabricmc.net/wiki/zh_cn:tutorial:list_of_useful_gists" target="_blank" rel="noopener"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-47.png" alt="点击打开页面" class="wp-image-584" /></a></figure>


其中的 <strong>怎样将Brigadier做得有条不紊</strong>:<a href="https://gist.github.com/falkreon/f58bb91e45ba558bc7fd827e81c6cb45">https://gist.github.com/falkreon/f58bb91e45ba558bc7fd827e81c6cb45</a>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-48.png" alt="" class="wp-image-585" /></figure>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-49.png" alt="" class="wp-image-586" /></figure>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-50.png" alt="" class="wp-image-587" />
    <figcaption>其中context得getSource再getPlayer,,,和上面的例子不一样</figcaption>
</figure>



<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-53.png" alt="" class="wp-image-590" /></figure>


可以运行


<figure class="wp-block-image size-full"><img src="http://sch246.top:2333/wp-content/uploads/2022/03/image-54.png" alt="" class="wp-image-591" /></figure>


就先到这里吧


<hr class="wp-block-separator has-css-opacity" />


ps: 以server模式启动时，不要忘了修改eula，运行时的文件都在 run/ 下面，打开资源包文件夹就能看见了

pps: 我的vsc debug时似乎可以热替换(有限的热替换


```
<code>(a,b,..) -&gt; {...}   //这是lambda函数
a&lt;b&gt; c = d          //这是泛型赋值，
//泛型可以看成是 int <strong>a</strong> = <strong>b</strong> 的plus版，定义泛型类 <strong>a</strong> 后输入类型 <strong>b</strong> 以确定一个类 <strong>a&lt;b&gt;</strong> 再以此定义 <strong>c</strong> 并将 <strong>d</strong> 的值赋给 <strong>c</strong> 
//感觉有点像元类(都是创建新的类，虽然泛型是在编译阶段确定的
//上式其实可以写成 <strong>a c = d</strong> 依旧可以通过，其中的 <strong>&lt;b&gt;</strong> 只是起到校验的作用
//见https://www.cnblogs.com/coprince/p/8603492.html
@Override           //与python的装饰器类似，这是注解
//见 https://blog.csdn.net/SmartShylyBoy/article/details/109655466</code>
```