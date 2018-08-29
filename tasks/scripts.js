//gulp 基础包
import gulp from 'gulp';
//gulp if 判断
import gulpif from 'gulp-if';
//gulp处理文件拼接
import concat from 'gulp-concat';
//webpack 打包工具
import webpack from 'webpack';
//webpack stream 处理包 结合 gulp
import gulpWebpack from 'webpack-stream';
//文件重命名 标志包
import named from 'vinyl-named';
//文件修改后 热更新包 （自动刷新）
import livereload from 'gulp-livereload';
//处理文件信息流包
import plumber from 'gulp-plumber';
//文件重命名包
import rename from 'gulp-rename';
//压缩 js css 包
import uglify from 'gulp-uglify';
//命令行输出包  日志 色彩
import { log, colors } from 'gulp-util';
import path from 'path';

//命令参数解析包
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        //错误处理
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        //文件重命名
        .pipe(named())
        //js 编译
        .pipe(gulpWebpack({
            module: {
                rules: [{
                    test: /\.js$/,
                    include: path.resolve(__dirname, "src"),
                    loader: "babel-loader"
                }]
            }
        }), null, (error, status) => {
            log(`finished ${colors.cyan('scripts')}`, status.toString({
                chunks: false
            }));
        })
        //编译到指定路径
        .pipe(gulp.dest('server/public/js'))
        //编译备份
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        //压缩
        .pipe(uglify({
            compress: {
                properties: false
            }, output: {
                quote_keys: true
            }
        }))
        //存储到指定位置
        .pipe(gulp.dest('server/public/js'))
        //监听文件变化后刷新
        .pipe(gulpif(args.watch, livereload()))
});