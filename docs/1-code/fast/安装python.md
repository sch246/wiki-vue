# 安装python

又一次安装 python，上次是在 CentOS， 这次是在 Ubuntu

使用命令`./configure --prefix=/usr/local/python3 --enable-optimizations --with-ssl`有警告: 未知的参数

看起来还是要改成`--with-openssl=openssl的安装路径`

## 下载编译安装 openssl

下载地址: [https://www.openssl.org/source/](https://www.openssl.org/source/)

```bash
# 下载
wget https://www.openssl.org/source/openssl-1.1.1s.tar.gz
# 解压
tar -zxvf ./openssl-1.1.1s.tar.gz
# 进入目录
cd openssl-1.1.1s
# 编译安装
# 在这之前确认这个位置没有文件
./config --prefix=/usr/local/openssl
make
make install
```

## 安装python

```
./configure --prefix=/usr/local/python3 --enable-optimizations --with-openssl=/usr/local/openssl
make && make install
```

出现报错，`ModuleNotFoundError: No module named 'zlib'`

参考

- [安装python3.7时候，报错ModuleNotFoundError: No module named '_ctypes'](https://blog.csdn.net/wang725/article/details/79905612)
  - [Python3: ImportError: No module named '_ctypes' when using Value from module multiprocessing](https://stackoverflow.com/questions/27022373/python3-importerror-no-module-named-ctypes-when-using-value-from-module-mul)

运行以下命令，然后重新`make install`，解决

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get install build-essential python-dev python-setuptools python-pip python-smbus
sudo apt-get install build-essential libncursesw5-dev libgdbm-dev libc6-dev
sudo apt-get install zlib1g-dev libsqlite3-dev tk-dev
sudo apt-get install libssl-dev openssl
sudo apt-get install libffi-dev
```

收尾，为什么要这么做可以参考[优先级](优先级.md)

```
ln -sf /usr/local/python3/bin/python3.10 /usr/local/bin/python3
ln -sf /usr/local/python3/bin/pip3 /usr/local/bin/pip3
hash -d python3
hash -d pip3
```

## [python交互式命令行不能使用方向键](/blogs/2023-01-24-python命令行不能使用方向键.md)