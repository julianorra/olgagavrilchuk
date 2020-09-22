const { src, dest } = require('gulp');
const zip = require('gulp-zip');

exports.default = function() {
	return src('./src/*')
		.pipe(zip('build.zip'))
		.pipe(dest('dist'));
}
