var gulp = require('gulp');
var babel = require("gulp-babel");
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var standard = require('gulp-standard');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    boostrap_sass_dir: './bower_components/bootstrap-sass/assets/stylesheets',
    static_css_dir: './static/css',
    static_js_dir: './static/js'
};

gulp.task('standard', function () {
  return gulp.src(['src/js/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true
    }))
})

gulp.task('js', ['standard'], function () {
  return gulp.src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.static_js_dir))
    .pipe(livereload());

});

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [config.boostrap_sass_dir]
    }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('maps', {
      includeContent: true,
      sourceRoot: config.static_css_dir
    }))
    .pipe(gulp.dest(config.static_css_dir))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', livereload.changed);
});

gulp.task('default', ['sass', 'js', 'watch']);
