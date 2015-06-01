var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('minify', function(){
  gulp.src('main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});

gulp.task('default', function(){

});
