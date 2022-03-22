'use strict'

var browserSync = require('browser-sync').create();

var gulp = require('gulp'),
	babel = require("gulp-babel"),
	sass = require('gulp-sass')(require('sass')),
	autoprefixer = require('gulp-autoprefixer'),
	rename  = require('gulp-rename'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	notify = require("gulp-notify");


gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
	      baseDir: "./src"
	    },
	    open: false,
	    notify: false
	});
})

function reload(done) {
	browserSync.reload();
	done();
}


/////////////// DEVELOPED ///////////////

gulp.task('sass', function(){
	return gulp.src(['src/sass/**/**/**/*.scss'])
	.pipe(plumber({errorHandler: notify.onError("ERROR: <%= error.message %>")}))
	.pipe(sass())
	.pipe(rename({dirname: ''}))
	.pipe(concat('blueberry.css'))
	.pipe(autoprefixer())
	.pipe(gulp.dest('src/assets'))
	.pipe(browserSync.reload({stream:true}))
})

gulp.task("js", function () {
  return gulp.src(['src/js/**/*.js'])
    .pipe(babel())
	.pipe(uglify())
    .pipe(gulp.dest("src/assets"));
});

gulp.task("watchFiles", function () {
	gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('src/js/**/*.js', gulp.series('js'));
	gulp.watch('src/**/**/*.+(html|js)', gulp.series(reload));
});



gulp.task('default', gulp.parallel('browser-sync', 'sass', 'js', 'watchFiles'), function() {});


