module.exports = {
  apps: [
    {
      name: 'koa-demo',
      script: 'src/index.js',
      // watch: true,
      env: {
        "NODE_ENV": "production",
      },
      // instances: 4,
      // exec_mode: "cluster",
      // 日志时间格式
      log_date_format: "YYYY-MM-DD HH:mm:ss.SSS"
    }
  ]
}