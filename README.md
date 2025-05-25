# vue-vscode-template

## 项目简介

`vue-vscode-template` 是一个基于 Vue 3 + Vite 的现代前端项目模板，专为追求高效开发体验的开发者设计。它集成了主流开发工具链，开箱即用，适合个人项目、企业中后台、组件库、快速原型等多种场景。

## 创建目的

- 提供一个**零配置、即刻开发**的 Vue 3 + Vite 项目起点。
- 让开发者专注于业务和创新，而不是繁琐的环境搭建。
- 集成常用开发工具（ESLint、Prettier、自动化测试等），提升代码质量和团队协作效率。
- 兼容 VSCode，内置推荐插件和格式化规范，提升开发体验。

## 主要特性

- 🚀 **极速启动**：基于 Vite，冷启动和热更新极快。
- 🦾 **现代技术栈**：Vue 3 + Vite + ES Module，拥抱未来。
- 🧩 **组件化开发**：目录结构清晰，适合中大型项目扩展。
- 🛠️ **内置代码规范**：集成 ESLint、Prettier，代码风格统一。
- 🧪 **自动化测试**：预留测试脚本，方便集成单元测试。
- 💡 **易于定制**：可根据实际需求灵活扩展和调整。

## 适用场景

- 个人/团队新项目的快速启动
- 企业中后台管理系统
- 组件库/工具库开发
- 前端技术学习与实践
- 代码规范和团队协作模板

## 技术栈

- [Vue 3](https://vuejs.org/)  
- [Vite](https://vitejs.dev/)  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)  
- [Yarn](https://yarnpkg.com/)  
- [VSCode 推荐插件](https://marketplace.visualstudio.com/)

## 快速开始

```sh
yarn install      # 安装依赖
yarn dev          # 启动开发服务器（默认 http://localhost:8080/）
yarn build        # 生产环境打包
yarn serve        # 本地预览打包结果
yarn lint         # 代码检查与修复
yarn test         # 运行测试（可自定义）
```

## 目录结构

```text
├── index.html              # 入口页面（Vite 规范）
├── public/                 # 静态资源目录（如 favicon）
├── src/                    # 源码目录
│   ├── assets/             # 静态资源
│   ├── components/         # Vue 组件
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
├── package.json            # 项目依赖与脚本
├── vite.config.js          # Vite 配置
└── README.md               # 项目说明
```

## 推荐 VSCode 插件
- ESLint
- Prettier - Code formatter
- Vue Language Features (Volar)
- EditorConfig for VS Code

## 贡献与反馈

欢迎提交 issue 或 PR，提出建议和改进！

---

> 本模板持续维护，致力于为开发者提供更高效、更愉悦的 Vue3 前端开发体验。
