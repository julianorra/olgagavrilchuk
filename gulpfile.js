const { series } = require("gulp");

// It can also be used within the `series()` composition.
function build(cb) {
	// body omitted

	return src('*.js')
    .pipe(dest('dist'));

	cb();
}
	
exports.default = series(build);
