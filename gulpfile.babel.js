import gulp, { series, parallel } from "gulp";
import config from "./gulp/config";
import { scssTask } from "./gulp/tasks/styles";
import { jsTask } from "./gulp/tasks/scripts";
import { cleanTask } from "./gulp/tasks/clean";

config.setEnv();

const watchTask = () => {
    gulp.watch(
        [`${config.src.sass}`, `${config.src.storybook}`, `${config.src.js}`],
        parallel(scssTask, jsTask)
    );
};

export const watch = series(parallel(scssTask, jsTask), watchTask);

export const build = series(cleanTask, parallel(scssTask, jsTask));
