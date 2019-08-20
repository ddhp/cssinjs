import { css } from 'emotion';

const myClassName = css`
  color: hotpink;
`;

const app = document.getElementById('root');
app.classList.add(myClassName);
