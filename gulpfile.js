var gulp = require('gulp');
var gutil = require('gulp-util');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');
var webpack = require('webpack-stream');
var ngc = require('@angular/compiler-cli').main;
var through = require('through2');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var pump = require('pump')
var named = require('vinyl-named');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var concatCss = require('gulp-concat-css');

const SASS_INCLUDE_PATHS = [
    path.join(__dirname, 'node_modules/font-awesome/scss'),
    path.join(__dirname, 'src/themes')
];

gulp.task('build', ['webpack'], () => {
    return gulp.src('.tmp')
        .pipe(clean());

});

gulp.task('clean', () => {
    return gulp.src('www')
        .pipe(clean());
});

gulp.task('build-html', ['clean'], () => {
    return gulp.src('src/**/*.html')
        .pipe(sourcemaps.init())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('www'));
});


gulp.task('build-sass', ['build-html'], () => {
    return gulp.src('src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: SASS_INCLUDE_PATHS,
            autoprefixer: {
                browsers: [
                    'last 2 versions',
                    'iOS >= 8',
                    'Android >= 4.4',
                    'Explorer >= 11',
                    'ExplorerMobile >= 11'
                ],
                cascade: false
            },
            includeFiles: [
                /\.(s(c|a)ss)$/i
            ],
            variableSassFiles: [
                path.join(__dirname, 'src/themes/variables.scss')
            ]
        }).on('error', sass.logError))
        .pipe(concatCss("main.css"))
        .pipe(cleanCSS())
        .pipe(gulp.dest('www'));
});

gulp.task('build-ts', ['build-sass'], () => {
    var tsProject = ts.createProject('tsconfig.json');

    var tsResult = tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('tmp'));
});

gulp.task('webpack', ['build-ts'], (cb) => {
    pump([gulp.src('tmp/**/*.js'),
    webpack({
        output: { filename: '[name].js' },
        rules: [{
            test: /\.json$/,
            use: 'json-loader'
        }]
    }),
    // uglify(),
    gulp.dest('www')], cb);
});
