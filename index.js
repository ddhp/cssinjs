import styles from './styles.css';

const demoDOM = document.createElement('div');
demoDOM.innerHTML = 'I am a Demo DOM';
demoDOM.className = styles['a-component'];
document.body.appendChild(demoDOM);
