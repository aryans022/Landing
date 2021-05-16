import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import { useStyles } from './OptionStyles';

export default function OptionBar() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(true);          

  return (
    <div>
      <Grid container className={classes.root}>

        <Grid item xs={6} className={selected?classes.selected:null}>
          <Button 
          onClick = {()=>{
            setSelected(true);
            console.log('attendance')
          }}>
            <Typography className={classes.buttonText}>
              ATTENDANCE
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={6} className={!selected?classes.selected:null}>
          <Button
          onClick = {()=>{
            setSelected(false);
            console.log('subscriptions')
          }}>
            <Typography className={classes.buttonText}>
              SUBSCRIPTIONS
            </Typography>
          </Button>
        </Grid>

      </Grid>
    </div>
  );
}
