var gulp = require('gulp');
var argv = require('yargs').argv;
var fileinclude = require('gulp-file-include');
var htmlmin = require('gulp-htmlmin');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('css', function () {
  return gulp.src(argv.folder + "/body.css", {base: "" + argv.folder})
      .pipe(gulp.dest('temp/'));
});

gulp.task('html', function () {
  return gulp.src(argv.folder + "/body.html", {base: "" + argv.folder})
      .pipe(gulp.dest('temp/'));
});

gulp.task('build', function () {
  return gulp.src("template/build.html", {base: "template"})
      .pipe(fileinclude())
      .pipe(gulp.dest("dist/" + argv.folder + "/"));
});

gulp.task('web', function () {
  return gulp.src("template/web.html", {base: "template"})
      .pipe(fileinclude())
      .pipe(gulp.dest("dist/" + argv.folder + "/"));
});

gulp.task('default', gulpsync.sync([
  ['css', 'html'],
  ['build', 'web'],
]));