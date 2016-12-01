/**
 * -------- PLEASE DON'T TOUCH THIS FILE --------
 *
 * This file is the instruction set for the gulp task runner.
 * This is where the logic lives that compiles and builds the
 * system that will run astromeet.
 *
 * The way that I've organized this is by following the unix design
 * principle "do one thing, and do it really well". Therefore I
 * have broken up large tasks like "build" into smaller sub-tasks that
 * get run when "build" is executed". I've used this convention for
 * a couple of different reasons. It makes refactoring this file
 * a lot easier, and it also allows for very granular control of the
 * build system.
 *
 * Each of these tasks is capable of being run on it's own, but the
 * purpose of each sub-task is to compose a larger task.
 *
 * @author David Edwards
 * @date 09/19/2016
 *
 * -------- PLEASE DON'T TOUCH THIS FILE --------
 *
 * TODO need to create tasks that build a "production" ready system (minifiying vendor files)
 * TODO need to modify the build system to include filter files
 */

const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

/* Front-end tasks */

/**
 * ----- Cleaning Tasks -----
 *
 * These tasks are used to remove files that are no longer needed.
 * Rarely will you need to execute these tasks on their own. These
 * tasks are mostly used by the build tasks to get rid of old files
 * before the build tasks replace them with the new code.
 *
 */
gulp.task('clean:lib:css', function() {
    return del('dist/lib/*.css');
});

gulp.task('clean:lib:js', function() {
    return del('dist/lib/*.js');
});

gulp.task('clean:lib', ['clean:lib:css', 'clean:lib:js']);

gulp.task('clean:app:js', function() {
    return del('dist/public/app/**/*.js');
});

gulp.task('clean:app:html', function() {
    return del('dist/public/app/**/*.html');
});

gulp.task('clean:app:css', function() {
    return del('dist/public/assets/css/*.css');
});

gulp.task('clean:app:images', function() {
    return del('dist/public/assets/images/**');
});

gulp.task('clean:client', ['clean:app:js', 'clean:app:html', 'clean:app:css', 'clean:app:images']);

gulp.task('clean:client:full', ['clean:app', 'clean:lib']);

/* END CLEANING TASKS */


/**
 * ----- Building Tasks -----
 *
 * These tasks are used to build the application. Each task
 * is broken down into small tasks that will be put together
 * to form the head build task for the front-end.
 *
 * The primary reason for building an application like this
 * is to minize the number of files that we are using in the
 * front-end of the application. The application will run faster
 * the fewer HTTP requests that it has to make
 */
gulp.task('build:lib:css', ['clean:lib:css'], function() {
    return gulp
        .src([
            'bower_components/bootstrap/dist/css/bootstrap.min.css',
            'bower_components/angularjs-datepicker/dist/angular-datepicker.min.css'
        ])
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('build:lib:js', ['clean:lib:js'], function() {
    return gulp
        .src([
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'public/assets/js/ui-bootstrap-tpls-2.3.0.js',
            'bower_components/angularjs-datepicker/dist/angular-datepicker.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/lib'));
});

gulp.task('build:lib', ['build:lib:css', 'build:lib:js']);

gulp.task('build:app:css', ['clean:app:css'], function() {
    return gulp
        .src('public/app/**/*.scss')
        .pipe(concat('app.min.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 1%'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/public/assets/css'));
});

gulp.task('build:app:html', ['clean:app:html'], function() {
    return gulp
        .src('public/app/**/*.html')
        .pipe(gulp.dest('dist/public/app'));
});

gulp.task('build:app:js', ['clean:app:js'], function() {
    return gulp
        .src([
            'public/app/app.js',
            'public/app/routes.js',
            'public/app/run.js',
            'public/app/**/*.svc.js',
            'public/app/**/*.ctrl.js',
            'public/app/**/*.directive.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/public/app'));
});

gulp.task('build:app:images', ['clean:app:images'], function() {
    return gulp
        .src('public/assets/images/*.jpg')
        .pipe(gulp.dest('dist/public/assets/images'));
});

gulp.task('build:client', ['build:app:js', 'build:app:html', 'build:app:css']);
gulp.task('build:client:full', ['build:client', 'build:lib', 'build:app:images']);

/* END BUILDING TASKS */




/**
 * ----- Back end Tasks -----
 *
 * These tasks are a lot simpler then the front-end tasks simply because
 * we are only working with javascript files. There is no need to
 * distinguish between different sections of the server code when building
 * and cleaning.
 *
 * Also note that since we aren't minify any server code, or using
 * something like typescript, the only thing these tasks are doing
 * is moving our server code from the src/ directory to the dist/
 * directory.
 */




/**
 * ---------- Main Tasks ----------
 *
 * These tasks are broad tasks that cover (mostly) the entire
 * system. These tasks aren't executed often because they are
 * mostly just used to setup the system when you first clone the
 * repository, and then they should be used whenever you git pull
 * from the repository.
 */

gulp.task('clean', ['clean:server', 'clean:client']);
gulp.task('nuke', function() {
    return del('dist/**/*');
});

gulp.task('build', ['build:client']);
gulp.task('setup', ['build:client:full']);


gulp.task('watch', function() {
    gulp.watch('public/app/**/*', ['build']);
});