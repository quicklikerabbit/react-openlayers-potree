import React from 'react';
import './App.css';
import OlMap from './Components/Map/OlMap'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppMenu from './Components/AppMenu/AppMenu';


function App() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: 'flex',
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppMenu />
      <OlMap />
    </div>
  );
}

export default App;
