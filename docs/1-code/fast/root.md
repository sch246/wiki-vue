# 权限

## 给予用户权限

修改 `/etc/sudoers`

> [https://www.cnblogs.com/yanling-coder/p/10947157.html](https://www.cnblogs.com/yanling-coder/p/10947157.html)

```bash
user1 localhost=(root)  /bin/kill
# 表示 user1 用户可以在本地以 root 的身份去执行 kill 命令
%admin ALL=(ALL) NOPASSWD:ALL
# 表示 admin 用户组内的用户可以在所有位置以所有身份用 sudo 执行所有命令，且不需要密码
```

使用这个可以查看用户组

```bash
# 查看自己用户组
groups
# 查看 vcs 的用户组
groups vcs
```

加入和移出用户组

> [https://www.runoob.com/linux/linux-comm-usermod.html](https://www.runoob.com/linux/linux-comm-usermod.html)

```bash
# vcs 加入用户组 admin
usermod vcs -g admin
# vcs 移出用户组 admin (移回自己组)
usermod vcs -g vcs
```

## 获取文件夹权限

```bash
sudo chmod -R 777 文件夹路径名  -- -R可以让文件夹下的子文件夹也被赋予上传的权限
```
