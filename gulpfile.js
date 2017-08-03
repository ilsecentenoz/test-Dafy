var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
	source: "./src/",
	dist: "./public"
};
var paths = {
	assets: "/assets/",
	html: "**/*.html",
	js: "**/*.js",
	sass: "scss/**/*.scss",
	mainSass: "scss/main.scss"
};
var source = {
	assets: config.source + paths.assets,
	html: config.source + paths.html,
	js: config.source + paths.js,
	sass: paths.assets + paths.sass,
	rootSass: config.source + paths.assets + paths.mainSass,

};
gulp.task("sass", function(){
	gulp.src(source.rootSass)
	.pipe(sass({
		outputStyle: "compressed"
	}).on("error", sass.logError))
	.pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("html", function(){
	gulp.src(source.html)
	.pipe(gulp.dest(config.dist));
});

gulp.task("js", function(){
	gulp.src(source.js)
	.pipe(gulp.dest(config.dist));
})

gulp.task('full-task',['js', 'html', 'sass']);