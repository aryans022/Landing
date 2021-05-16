import React from 'react';
import {Card, Typography, Grid, Button} from '@material-ui/core';
import { useStyles } from './CardStyles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CallIcon from '@material-ui/icons/Call';
import image from './card.jpg'

export default function CustomCard() {
  const classes = useStyles();        

  return (
    <Card className={classes.card}>
      <Typography className={classes.premium}>Premium</Typography>

      <Grid container className={classes.upper} align='center'>

        <Grid item xs = {5}>
          <img src={image} className={classes.image} alt='subscriber'/>
        </Grid>

        <Grid item xs = {7}>
          <Grid container>

            <Grid item xs = {8}>
              <Typography className={classes.name}>Nazma Biwi</Typography>
            </Grid>
            <Grid item xs = {4}>
              <CheckCircleIcon style={{color:'green', height:'25px'}}/>
            </Grid>
          
            <Grid item xs = {3} className={classes.phone}>
              <CallIcon style={{color:'#F89A3B', height:'25px'}}/>
            </Grid>
            <Grid item xs = {9} className={classes.phone}>
              <Typography className={classes.phoneNumber}>9283719237</Typography>
            </Grid>

          </Grid>
        </Grid>

        <hr style={{width:'270px'}}/>
        
        <Grid item xs={12}>
          <Typography className={classes.head}>Subscription Details</Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Typography  className={classes.text}>Start</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography  className={classes.text}>Expire</Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Typography  className={classes.head} style={{marginTop:'5px'}}>12 April 2021</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography  className={classes.head} style={{marginTop:'5px'}}>12 May 2021</Typography>
        </Grid>
        
        <Grid item xs={6}>
          <Button 
          className={classes.cancel} 
          onClick={()=>{console.log('cancel handler')}}
          >
            Cancel Plan
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button 
          className={classes.renew}
          onClick={()=>{console.log('renew handler')}}
          >
          Renew Plan
          </Button>
        </Grid>

      </Grid>

    </Card>
  );
}
