# electron + vue 快速创建模板

由于electron-vue停止了更新，导致其中的vue版本和electron版本实在过低，因此我使用 electron-force 和 vue-cli 重新构建了一个最新版本的快速创建模板。





## Overview 概述

此模板没有添加任何的vue插件，并且使用的是最新的 electron-force 模板，您可以访问 https://www.electronforge.io/ 查看更多有关electron-forge的信息



如果您有其他需求，您可以在github上提交请求。





## Getting Started 入门

第一步：

``` 
git clone https://github.com/mesakas/electron-vue-template.git
```

然后：

``` 
# 开发阶段
npm run dev 	#开启vue-cli-service 和 electron

# 打包
npm run package
npm run make
npm run publish

# 执行打包的任意命令后，程序会自动先将vue打包之后再将electron打包
```



关于打包的更多内容，请参阅electron-forge https://www.electronforge.io/