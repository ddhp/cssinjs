import { css } from 'emotion';

const app = document.getElementById('root');
const myClassName = css`
  color: hotpink;
`;
app.classList.add(myClassName);
