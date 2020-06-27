# vue-vscode-template

基于最新的vue进行优化设置的模板，采用`pnpm`进行快速和节省硬盘空间的安装。限定chunk size < 250K，避免编译时报错，去除map文件以减少尺寸。

## 项目初始化

```sh
pnpm i
```

### 开发调试

```sh
pnpm run serve
```

### 编译

```sh
pnpm run build
```

### 自动化测试

```sh
pnpm run test
```

### 静态检查和修复

```sh
pnpm run lint
```

### 自定义设置

参见[设置指南](https://cli.vuejs.org/config/)。
