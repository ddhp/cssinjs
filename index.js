import styles from './styles.css';

const demoDOM = document.createElement('div');
demoDOM.innerHTML = 'I am a Demo DOM';
demoDOM.classList.add(styles['a-component']);
document.body.appendChild(demoDOM);
