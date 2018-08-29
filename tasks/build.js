import gulp from 'gulp';
//任务执行顺序
import gulpSequence from 'gulp-sequence';

gulp.task('build', gulpSequence(
    'clean',
    'css',
    'pages',
    'scripts',
    ['browser', 'serve']
));