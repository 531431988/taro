### 使用说明

---

- 👽 安装：npm i 或 cnpm i 或 yarn add
- 👽 运行：npm run dev:weapp 或 yarn dev:weapp
- 👽 打包：npm run build:weapp 或 yarn build:weapp
- 👽 预览：打开微信开发者工具，然后选择项目根目录(dist)进行预览

### 文件结构

```shell
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── api                api封装
|   ├── components         公共组件目录
|   ├── pages              页面文件目录
|   ├── scss               全局样式入口
|   ├── utils              公共方法库
|   └── app.js             项目入口文件
└── package.json
```
