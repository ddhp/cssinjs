import jss from 'jss';
import preset from 'jss-preset-default';

// One time setup with default plugins and settings.
jss.setup(preset());

const styles = {
  root: {
    color: 'hotpink',
  },
};

const {classes} = jss.createStyleSheet(styles).attach();

const app = document.getElementById('root');
app.classList.add(classes.root);
