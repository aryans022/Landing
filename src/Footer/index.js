import React from 'react';
import {Paper, Grid, Typography, Button, Box} from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import { useStyles } from './FooterStyles';

export default function Footer() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState('Home');          

  return (
    <Paper className={classes.footer} elevation='4'>
      <Grid container>
      
        <Grid item xs={4} className = {classes.box}>
          <Button 
            className={`${classes.iconButton} ${selected==='Home'?classes.iconSelected:null}`} 
            onClick = {()=>{setSelected('Home'); console.log('home')}}
          >
            <Box>
              <EmojiFoodBeverageIcon className={classes.icon} />
              <Typography className={classes.iconText}>Home</Typography>
            </Box>
          </Button>
        </Grid>

        <Grid item xs={4} className = {classes.box}>
          <Button 
            className={`${classes.iconButton} ${selected==='Explore'?classes.iconSelected:null}`} 
            onClick = {()=>{
              setSelected('Explore');
              console.log('explore');
            }}
          >
            <Box>
              <ExploreIcon className={classes.icon} />
              <Typography className={classes.iconText}>Explore</Typography>
            </Box>
          </Button>
        </Grid>

        <Grid item xs={4} className = {classes.box}>
          <Button 
            className={`${classes.iconButton} ${selected==='Support'?classes.iconSelected:null}`} 
            onClick = {()=>{setSelected('Support'); console.log('support')}}
          >
            <Box>
              <HeadsetMicIcon className={classes.icon} />
              <Typography className={classes.iconText}>Support</Typography>
            </Box>
          </Button>
        </Grid>

      </Grid>
    </Paper>
  );
}
