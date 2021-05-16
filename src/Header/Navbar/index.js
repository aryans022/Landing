import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './NavbarStyles';

export default function Navbar(props) {
  const classes = useStyles();

  return (
      <AppBar className={classes.navbar} elevation={0}>
        <Toolbar>

          <IconButton 
            className = {classes.iconButton}
            color="inherit" 
            aria-label="open drawer" 
            onClick={props.opener} 
            edge="start" 
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' className = {classes.title}>
            ChefKart
          </Typography>

          <div className = {classes.flex}></div>

          <IconButton 
            className = {classes.iconButton}
            color="inherit" 
            onClick={()=>console.log('will search')} 
            edge="end" 
          >
            <SearchIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
  );
}
