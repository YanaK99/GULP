// Sass task: compiles the style.scss file into style.css
import { src, dest } from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import gulpIf from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

import config from "../config";

const sass = gulpSass(dartSass);

export const scssTask = () => {
    return src(config.src.mainSCSS)
        .pipe(gulpIf(config.isDev, sourcemaps.init()))
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulpIf(config.isDev, sourcemaps.write(".")))
        .pipe(dest(config.dest.css));
};
