var gulp = require('gulp');
var sass = require('gulp-sass')
var browserSync = require('browser-sync');


gulp.task('sass', function(){
    return gulp.src('styles/scss/styles.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('styles/css'))
      .pipe(browserSync.stream());
  });

gulp.task('default', function () {
  gulp.src('./node_modules/animejs/lib/anime.min.js')
  .pipe(gulp.dest('./dist/assets'));
})

gulp.task('watch', function(){
      browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch('styles/scss/**/*.scss', gulp.series('sass')); 
})