# 简单的QQbot

通过和 chatGPT 友好地磋商，我得出了搭建简单的 QQ bot 的方法

在开始之前，我们需要知道一个 QQ bot 需要什么

- 一个 QQ 客户端，这里使用 go-cqhttp
- 操作 QQ 客户端的程序，就是我们将要写的玩意

## 啥都不想管

那么请出门左拐去找 [NoneBot](https://nb2.baka.icu/)

## 想要一个尽快能用的开发环境(同步)

有一个 python 库叫作 cqhttp , 它的仓库是 [https://github.com/cqmoe/python-cqhttp](https://github.com/cqmoe/python-cqhttp)

通过`pip install cqhttp`后只需要这样

```py
import cqhttp

# 这里对应着 go-cqhttp 设置中的监听地址和端口，我们调用 api 的地址
bot = cqhttp.CQHttp(api_root="http://127.0.0.1:5700")

@bot.on_message('private')
def handle_msg(event):
    if event['message'] == 'test':
        name = bot.get_stranger_info(user_id=event['user_id'])['nickname']
        bot.send(event, f"Hello {name}! How can I help you?")

# 这里对应着 go-cqhttp 设置中的 反向HTTP POST
bot.run(host="127.0.0.1", port=5701)
```

这个例子里已经有收到消息的处理(给函数加上`bot.on_message()`这个装饰器)以及调用api的方法(调用了一个叫作`get_stranger_info`的api)了

除了收到消息使用`on_message`外，还有`on_notice`, `on_request`, `on_meta_event`

你可能注意到可以输入参数`private`来指定仅私聊消息才能触发这个函数，这个背后使用的是比对`message_type`的值，也就是说如果没有`xx_type`的键的话就会报错））

这个包的问题就是后台会持续输出 http 的 log

就像这样

```
127.0.0.1 - - [31/Jan/2023 16:39:43] "POST / HTTP/1.1" 200 -
```

可以加上这么几行来禁用异常之外的输出

```py
import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
```

需要注意的是这个库已经停止维护了

## 想要一个尽快能用的开发环境(异步)

有个 python 库叫作 aiocqhttp , 它的仓库是 [https://github.com/nonebot/aiocqhttp](https://github.com/nonebot/aiocqhttp)

通过`pip install aiocqhttp`后只需要这样

```py
from aiocqhttp import CQHttp, Event

# 这里对应着 go-cqhttp 设置中的监听地址和端口，我们调用 api 的地址
bot = CQHttp(api_root='http://127.0.0.1:5700')


@bot.on_message('private')
async def _(event: Event):
    await bot.send(event, f'你发了：{event.message}')
    # return {'reply': event.message}


# 这里对应着 go-cqhttp 设置中的 反向HTTP POST
bot.run(host='127.0.0.1', port=5701)
```

可以发现用法和上面的基本一致

这个同样会输出 http 的 log , 就像下面这样

```
[2023-01-31 17:01:43 +0800] [4948] [INFO] 127.0.0.1:65213 POST / 1.1 204 0 1222
```

但是我不知道怎么关）
