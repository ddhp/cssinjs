# CSS in JS Pros & Cons
## CSS
- originally designed to be global namespaced
- simple and intuitive
- **class naming become a problem when application's scale raises**
- **developers want a more versatile way to define styles**

## Needs
- avoid naming conflict: BEM
- syntax sugars: preprocessors: SASS, LESS
    - nested style
    - import other style
    - variable
    - vendor prefix

## Preprocessors solution
- Pros:
    - has been using for a long time, very well developed
    - postcss
- Cons:
    - still has naming issue

## CSS modules
- main idea is: solve naming issue, by automatically giving every class an unique class name

## wepback CSS loader implements css-module
1. enable `css-loader`'s modules config in webpack config
```javascript
// in webpack.config.js
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }],
            },
        ],
    },
```
2. in your js file, you can get the unique class name by `style[originalName]`
3. `style-loader` add style sheet into `<head>` during runtime

> for other syntax sugars, use correspondent loaders

**css-module-way branch**

## For production
extract css
pros:
    - parallel loading of CSS/JS resources

    - if your bundle would be run/rendered on the server side, it wouldn't work.
    since `style-loader` utilizes browser-only api.

**extract branch**


## Use it with modern render libraries
React for example,
Why would you need `styled-components` or other css frameworks?


## CSS module is lacking
- compose class(base button/form group): counter intuitive api
- variable(define breakpoints): only available in current file

> css-loader transpiles css file, exports a map of class names
> how to define your style sheet is still highly depends on the css language itself(or depends on which preprocessor you use)

## JS solutions
for javascript developers, compose(extend) and define variable are very intuitive.
So why not describe your style inside js files?

## JS solutions 2
- stylis -> emotion -> styled-components
- jss -> react material ui

## stylis & emotion
Stylis is a light weight css preprocessor, transpiles template string into css string with given selector

Emotion, utilizes stylis for transpilation,, it's `css` package is aimming to be used in vanilla js

**emotion branch**

## styled-components
emotion's `core` package adopts react ecosystem(jsx) with the support from `babel` transpilation

a more famous framework is `styled-components`
https://medium.com/styled-components/how-styled-components-works-618a69970421
does a lot of thing under the hood, including utilize `@emotion/stylis` to transpile template string
generate unique class names and append

## After modulized
- define global style

## How to deal with the scaling situation
###
### naming convention


## Other things to handle
- **server side rendering(SSR)** Later!!!

below are not in the scope of this talk, basically with right plugin and config, not a big problem
- hot reload(for better development experience)
- code splitting

## Can JS fulfill all the needs
- Yes
- How
    - nested style: style transpile
    - import other style: es6 module system
    - variable: use variable in js is very intuitive
    - vendor prefix:

## Knowing what's your needs first
- vanilla/easiest way: vanilla css
- hate naming convention: css-module(css-loader) / emotion.css / jss
- more versatile: emotion.core / react mui / styled-components
- need interpolation
