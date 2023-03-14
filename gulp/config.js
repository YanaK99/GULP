const srcPath = "src";
const destPath = "dist";

const config = {
    src: {
        root: srcPath,
        sass: `${srcPath}/scss/**/*.scss`,
        js: `${srcPath}/js/**/*.js`,
        mainSCSS: `${srcPath}/scss/styles.scss`,
        storybook: "storybook/**/*.scss",
    },

    dest: {
        root: destPath,
        css: `${destPath}/css`,
        js: `${destPath}/js`,
    },

    setEnv() {
        this.isProd = process.argv.includes("--prod");
        this.isDev = !this.isProd;
    },
};

export default config;
