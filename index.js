import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.css';

const DemoDOM = React.createElement(
    'div',
    { className: styles['a-component'] },
    'I am a Demo DOM'
);

ReactDOM.render(DemoDOM, document.getElementById('root'));
