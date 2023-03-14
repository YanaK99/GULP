# Theme Documentation

## How to build styles and storybook

### Build Styles on server (for CI)

1. Go to theme folder `cd web/themes/custom/verifon`
2. It should be v18 node version (v18.13.0)
3. It should be **_npm_** installed on server
4. Run `npm install`
5.  - `npm build:dev` - for dev env
    - `npm build:prod` - for pre-live env

### For BE

1. Open terminal in theme folder
2. Run `nvm use`. Instruction for install **nvm** [here](https://github.com/nvm-sh/nvm)
3. Check _npm_ package with `npm --version`, install _npm_ if you haven't [npm install](https://docs.npmjs.com/cli/v9/commands/npm-install)
4. Run `npm install`
5. Run `npm build:dev`

### FE preparation work

1. Check Stylelint configuration ![Screenshot 2023-01-11 at 13 45 59](https://user-images.githubusercontent.com/90825333/211799662-df7828d1-12ce-4719-8fbd-29da147a3c87.png)

2. Config SCSS code style according to screen ![Screenshot 2023-01-11 at 13 48 19](https://user-images.githubusercontent.com/90825333/211799771-50fbd842-e01d-4bd6-b158-90280f0448e8.png)

3. Install Prettier plugin and config it according to screen ![Screenshot 2023-01-11 at 15 00 50](https://user-images.githubusercontent.com/90825333/211812757-70f23f26-2d37-4c95-b4c3-5cd16f0e4eec.png)

4. Check [this link](https://youtrack.jetbrains.com/issue/WEB-50148/Stylelint-add-option-to-fix-files-on-save) for config custom IDE (PHP/Web Storm) watcher for Stylelint fix on save

5. Keep calm and let's code

### For FE

1. Open terminal in theme folder
2. Run `nvm use`
3. Check _npm_ package with `npm --version`, install _npm_ if you haven't [npm install](https://docs.npmjs.com/cli/v9/commands/npm-install)
4. Install **Stylelint** and **Prettier** plugin to your IDE and configure it
5.  - Run `npm dev` for start watching **scss** and **js** files
6. Read documentation below for correct way of styling
7. Before push changes to dev you need to run `npm stylelint`. It should help to resolve issues in styles

## SCSS Structure

-   Base: Includes default styles for different elements
-   Components: Includes separated styles for components as Header and all paragraphs
-   Helpers: Includes mixins
-   Variables: Includes color variables, breakpoints etc.
