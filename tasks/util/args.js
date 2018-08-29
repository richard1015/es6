import yargs from 'yargs';

const args = yargs
    //区分线上开发环境
    .option('production', {
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    //控制 是否需要编译
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    //详细输出 命令行 执行日志 
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    //映射
    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })

    //服务器端口设置
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    }).argv


module.exports = args;
