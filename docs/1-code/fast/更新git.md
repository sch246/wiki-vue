# 更新git

不使用ius仓库已不能安装git2.x版本

## IUS

### 安装epel-release

```bash
yum -y install epel-release
```

### 安装IUS源

> https://ius.io/setup

```bash
# 导入gpg key
rpm --import https://repo.ius.io/RPM-GPG-KEY-IUS-7

# 官方方法安装IUS源
yum install https://repo.ius.io/ius-release-el7.rpm https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm -y

# 通过aliyun安装IUS源
yum install -y https://mirrors.aliyun.com/ius/ius-release-el7.rpm
```

### 配置IUS国内源

```bash
sed -i "s|repo.ius.io|mirrors.tuna.tsinghua.edu.cn/ius|g" /etc/yum.repos.d/ius.repo
```

### 刷新缓存

```bash
yum repolist && yum clean all && yum makecache
```

## git

### 卸载

```bash
yum search git|grep -E "^git"
```

### 查询版本

```bash
yum search git|grep -E "^git"
```

### 安装指定版本

```bash
yum install git236 -y
```

### 查询版本

```bash
git version
```