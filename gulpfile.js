import { src, dest, parallel } from 'gulp';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';

const OUTPUT_DIR = 'dist'; 

export function minifyHtml() {
  return src(`${OUTPUT_DIR}/**/*.html`)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        useShortDoctype: true,
        removeComments: true,
        minifyJS: true
      })
    )
    .pipe(dest(OUTPUT_DIR));
}

export function minifyJs() {
  return src(`${OUTPUT_DIR}/**/*.js`)
    .pipe(terser())
    .pipe(dest(OUTPUT_DIR));
}

export default parallel(minifyHtml, minifyJs);
