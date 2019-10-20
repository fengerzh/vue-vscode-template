# vue-vscode-template

基于最新的vue进行优化设置的模板，采用`pnpm`进行快速和节省硬盘空间的安装，并采用`webpack`的`dllplugin`进行编译加速，比通常的缺省设置至少节省一半以上的`build`时间以及甚至90%以上的硬盘空间。

## 项目初始化

```sh
pnpm i
pnpm run dll
```

此处运行dll将生成初始化的`vendor`文件，以后`build`时即不再需要重新打包`node_modules`中的众多文件，可以大量节省`build`时间。

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
