// 导入Express模块
const express = require('express');
// 创建一个Express应用
const app = express();

// 设置服务器端口
const port = 3000;

// 提供静态文件服务
app.use(express.static('public'));

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
