import { src, dest, parallel } from 'gulp';
import htmlmin from 'gulp-htmlmin';
import terser from 'gulp-terser';
import cleanCss from 'gulp-clean-css';

// 11ty's default output directory. Change this if you customized it in .eleventy.js
const OUTPUT_DIR = 'dist'; 

// 1. Minify HTML (Ignoring inline CSS/JS)
export function minifyHtml() {
  return src(`${OUTPUT_DIR}/**/*.html`)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        useShortDoctype: true,
        removeComments: true,
        minifyJS: true // Tells the plugin to minify code inside <script> tags
      })
    )
    .pipe(dest(OUTPUT_DIR));
}

// 2. Minify External CSS
export function minifyCss() {
  return src(`${OUTPUT_DIR}/**/*.css`)
    .pipe(cleanCss({ level: 1 })) // level 1 is safe, standard minification
    .pipe(dest(OUTPUT_DIR));
}

// 3. Minify External JS
export function minifyJs() {
  return src(`${OUTPUT_DIR}/**/*.js`)
    .pipe(terser())
    .pipe(dest(OUTPUT_DIR));
}

// Export a parallel run since these tasks don't depend on each other
export default parallel(minifyHtml, minifyCss, minifyJs);
