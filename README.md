# CSS in JS Pros & Cons

## CSS
- simple and intuitive
- simple
  - **developers want a more versatile way to define styles**
- originally designed to be global namespaced
  - **class naming become a problem when application's scale raises**

## Needs & solutions
- avoid naming conflict: BEM
- syntax sugars: preprocessors: SASS, LESS
    - nested style
    - import other style
    - variable
    - vendor prefix

## Preprocessors solution
- Pros:
    - has been using for a long time, very well developed
    - postcss: modulize each feature of the preprocessor, widely used as webpack loaders
- Cons:
    - still has naming conflict

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
2. in your js file, you can get the unique class name by `importedCss[originalName]`
3. `style-loader` add style sheet into `<head>` during runtime

> for other syntax sugars, use correspondent loaders

## For production
extract css
pros:
    - parallel loading of CSS/JS resources

    - if your bundle would be run/rendered on the server side, it wouldn't work.
    since `style-loader` utilizes browser-only api.


## What CSS module is lacking
- compose class(base button/form group): counter intuitive api
- variable(define breakpoints): only available in current file

> css-loader transpiles css file, exports a map of class names
> how to define your style sheet is still highly depends on the css language itself(or depends on which preprocessor you use)

## JS solutions
for javascript developers, compose(extend) and define variable are very intuitive.
So why not describe the style inside js files?

## JS solutions 2
- stylis -> emotion -> styled-components
- jss -> react material-ui

## stylis & emotion
Stylis is a light weight css preprocessor, transpiles template string into css string with given selector
```javascript
stylis('#id', `
font-size: 2em;

// line comments
/* block comments */

:global(body) {background:red}

h1 {
   h2 {
       content:'nesting'
   }
}

@media (max-width: 600px) {
   & {display:none}
}

@keyframes slide {
   from { opacity: 0}
   to { opacity: 1}
}

& {
   display: flex
}

&::placeholder {
   color:red
}
`);
```

Emotion, utilizes stylis for transpilation, it's `css` package is aimming to be used in vanilla js

## JSS
```javascript
// syntax
```

## The difference between Emotion and JSS
Take a look at stylis's api, it takes a unique selector already,
so it doesn't hash selectors inside it's style sheet.

on the other hand, jss hashs every key of the style object.

## The difference when using js solutions
- no need to extract css out -> lose the benefit of parallal loading
- FOUC(Flash of unstyled component) when SSR(server side render): since style is applied during runtime
    - extra action needed: styled-components, jss
    - no need: [emotion](https://emotion.sh/docs/ssr)

## Dynamic class name with vanilla js / vuejs-like libraries
Imperative
```javascript
// classNames is defined by css-module or emotion or jss doesn't matter
const clickCb = (e) => {
    const class = e.data.isOn ? classNames.isOn : classNames.isOff;
    // set target dom's class attribute
}
```

## styled-components
emotion's `core` package adopts react ecosystem(jsx) with the support from `babel`(transpiles React.createElement to its own jsx function)
`styled` package has very similiar api as styled-components

`styled-components`
uses `@emotion/stylis` to transpile template string, and handles generating unique class names and attaching style
on its own

https://medium.com/styled-components/how-styled-components-works-618a69970421


## React Material-ui
utilizes jss and exposes `hook`, `styled`, `hoc` apis for attaching style

## Dynamic scenarios
speak of attaching style, let's take a look at some dynamic scenarios

## Global style
- set style for body, e.g: opening a modal

- emotion / styled-components: an extra component `GlobalStyleComponent` is needed

- JSS: use keyword `global` with limitation: the global style applies when component is rendered, and vise versa
```
'@global': {
    body: {
      overflow: 'hidden',
    },
},
```

## Dynamic style
scenario: base on current selected locale, apply different font-family.

@emotion.core:
```javascript
render(
    <div
      css={css`
        font-family: ${this.state.locale === 'zh' ? 'Taiwanese targetted font ' : 'English targetted font'},
      `}
    />
)
`css` is executed on every render, not sure if it's optimized as react hook
```

styled-components & @emotion.styled: has to be given by props from parent component
```javascript
const Styled = styled.div`
  font-family: ${props => props.locale === 'zh' ? 'Taiwanese targetted font ' : 'English targetted font'};
`;

// parent component
render(
    <Styled locale={this.state.locale} />
)
```

jss hoc: has to be given by props from parent component
```javascript
const style = {
    root: {
        fontFamily: props =>
           props.locale === 'zh' ? 'Taiwanese targetted font ' : 'English targetted font',
    },
};

function MyComponent(props) {
  const { classes } = props;
  return <div className={classes.root} />;
}
const Styled = withStyles(styles)(MyComponent);

// parent component
render(
    <Styled locale={this.state.locale} />
)
```

jss hook: can use local state, more intuitive
```javascript
const useStyles = makeStyles({
    root: {
        fontFamily: props =>
           props.locale === 'zh' ? 'Taiwanese targetted font ' : 'English targetted font',
    },
});

function MyComponent(props) {
    const classes = useStyles({ locale });
    return <Button className={classes.root} />;
}

// parent component
render(
    <MyComponent />
)
```

## Summary
- @emotion.styled & styled-components: can only define style for current component, not children
- @emotion.core can do dynamic stylesheet, the drawback is: it has to be defined inline in the render function
- emotion, styled-components and react mui hoc api requires props given from parents for dynamic stylesheet.
- react mui's hook api is flexible and intuitive, but you can't use in Class based components

## Knowing what's your needs first
- app scale is relatively small: vanilla css
- hate naming convention: css-module(css-loader)
- comprehensive capability with some drawbacks: emotion / styled-components / react material-ui

## Use it with modern render libraries
React for example,
Why would you need `styled-components` or other css frameworks?

## Other things to handle
- **server side rendering(SSR)** Later!!!

below are not in the scope of this talk, basically with right plugin and config, not a big problem
- hot reload(for better development experience)
- code splitting
