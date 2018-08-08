import { src, dest } from 'gulp';
import sass from 'gulp-sass';

export function defaultTask(callback: () => void) {
    callback();
}

export function scss(done: () => void) {
    return src('./report/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./out'));
}