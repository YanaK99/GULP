// JS task: concatenates and uglifies JS files to script.js
import { dest } from "gulp";
import browserify from "browserify";
import { globSync } from "glob";
import babelify from "babelify";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import path from "path";
import gulpIf from "gulp-if";
import config from "../config";

export const jsTask = () => {
    const files = globSync(config.src.js);
    const tasks = files.map((file) => {
        const fileName = path.basename(file);
        const filePath = path.dirname(file).replace("src/js", "");
        const outputFolder = path.join(config.dest.js, filePath);
        const outputFileName = path.parse(fileName).name;

        const browserifyConfig = {
            entries: file,
            extensions: [".js"],
        };
        const uglifyConfig = {};

        return browserify(browserifyConfig)
            .transform(
                babelify.configure({
                    presets: ["@babel/preset-env"],
                })
            )
            .bundle()
            .pipe(source(outputFileName + ".js"))
            .pipe(buffer())
            .pipe(gulpIf(config.isDev, sourcemaps.init()))
            .pipe(uglify(uglifyConfig))
            .pipe(
                gulpIf(
                    config.isDev,
                    sourcemaps.write("./", {
                        sourceMappingURL: () => `${outputFileName}.js.map`,
                    })
                )
            )
            .pipe(dest(outputFolder));
    });

    return Promise.all(tasks);
};
