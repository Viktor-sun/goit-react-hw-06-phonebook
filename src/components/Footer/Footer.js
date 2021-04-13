import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/Viktor-sun/goit-react-hw-08-phonebook"
      >
        My GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    padding: theme.spacing(3, 2),
    // marginTop: 'auto',
    backgroundColor: 'gray',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography variant="body1" align="center">
          Made by Viktor.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
