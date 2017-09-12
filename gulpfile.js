let gulp=require("gulp");
let babel=require("gulp-babel");
require('babel-polyfill');
gulp.task("default",function(){
    return gulp.src("es2015/index.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
})
gulp.watch("./es2015/index.js",['default']);