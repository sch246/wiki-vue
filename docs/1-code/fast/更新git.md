# 更新git

> [Centos7安装IUS源](https://blog.csdn.net/omaidb/article/details/126462236)

不使用ius仓库已不能安装git2.x版本

## IUS

```bash
# 安装epel-release
yum -y install epel-release
# 安装IUS源
# > https://ius.io/setup
## 导入gpg key
rpm --import https://repo.ius.io/RPM-GPG-KEY-IUS-7
## 通过aliyun安装IUS源
yum install -y https://mirrors.aliyun.com/ius/ius-release-el7.rpm
# 配置IUS国内源
sed -i "s|repo.ius.io|mirrors.tuna.tsinghua.edu.cn/ius|g" /etc/yum.repos.d/ius.repo
# 刷新缓存
yum repolist && yum clean all && yum makecache
```

## git

```bash
# 卸载
yum autoremove git -y
# 查询版本
yum search git|grep -E "^git"
# 安装指定版本
yum install git236 -y
# 查询版本
git version
```
