const gulp = require('gulp');
const argv = require('yargs').argv;
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');

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
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/" + argv.folder + "/"));
});

gulp.task('web', function () {
  return gulp.src("template/web.html", {base: "template"})
    .pipe(fileinclude())
    .pipe(gulp.dest("dist/" + argv.folder + "/"));
});

gulp.task('default', gulp.series([
  ['css', 'html'],
  ['build', 'web'],
]));