// gulpfile.js

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const path = require('path');

// Define paths
const paths = {
  css: {
    src: './assets/styles.css', // Source CSS files (adjust as needed)
    dest: './assets/dist',        // Destination for compiled CSS
  },
  templates: './**/*.html',   // Django templates
};

// PostCSS plugins
const plugins = [
  tailwindcss('./tailwind.config.js'),
  autoprefixer,
];

// Task to process CSS
function css() {
  return gulp
    .src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest));
}

// Task to watch for changes
function watchFiles() {
  gulp.watch([paths.css.src, paths.templates], css);
}

// Define complex tasks
const build = gulp.series(css);
const watch = gulp.series(build, watchFiles);

// Export tasks to CLI
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;
