var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', () => {
	return browserify({
		entries: './src/client.js',
		extensions: ['.js'],
		debug: true
	})
	.transform('babelify', {
		presets: ['es2015', 'stage-2', 'react'],
		plugins: ['transform-class-properties']
	})
	.bundle()
	.on('error', function(err){
		gutil.log(gutil.colors.red.bold('[browserify error]'));
		gutil.log(err.message);
		this.emit('end');
	})
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('public/dist'));
});

gulp.task('watch', ['build'], () => {
	gulp.watch('./src/**/*.js', ['build']);
	require('./src/server.js');
});


gulp.task('default', ['watch']);
