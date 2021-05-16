import React from 'react';
import {Typography} from '@material-ui/core';
import { useStyles } from './HomeStyles';
import Card from './Card';

export default function Home(props) {
  const classes = useStyles();  

  return (
    <center>
      <Typography className={classes.heading}>My Subscriptions</Typography>
      <Card />
    </center>
  );
}
