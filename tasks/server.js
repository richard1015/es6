import gulp from 'gulp';
import gulpif from 'gulp-if';
//启动服务器依赖包
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (callback) => {
    if (!args.watch) return callback();
    //创建服务器   --harmony当前命令行下执行 该脚本
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();
    //文件监听 页面文件发生变化
    gulp.watch([
        'server/public/**/*.js',
        'server/views/**/*.ejs'
    ], (file) => {
        //通知服务器文件发生改变
        server.notify.apply(server, [file]);
    });

    //监听文件 路由发生变化
    gulp.watch([
        'server/routers/**/*.js',
        'server/app.js'
    ], () => {
        //服务重启
        server.start.bind(server)();
    });
});