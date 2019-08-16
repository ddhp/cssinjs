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


## For React & other rendering library

## CSS module is lacking
counter intuitive compose api


## JS solutions
- styled-component
- react mui

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
