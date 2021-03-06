import React from 'react';
import './App.css';
import OlMap from './Components/Map/OlMap'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppMenu from './Components/AppMenu/AppMenu';
import Viewer from './Components/Viewer/Viewer';
import {
  Switch,
  Route
} from "react-router-dom";

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
      <Switch>
        <Route path="/map">
          <OlMap />
        </Route>
        <Route path="/viewer">
          <Viewer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
