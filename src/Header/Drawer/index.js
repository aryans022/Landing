import React from 'react';
import {Drawer, List, IconButton, Typography, ListItem}  from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useStyles } from './DrawerStyles';

export default function CustomDrawer(props) {
  const classes = useStyles();

  return (

    <Drawer
      anchor='left'
      open={props.isOpen}
      ModalProps={{ onBackdropClick: props.closer }}
      classes={{
       paper: classes.drawerPaper,
      }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={props.closer}>
          <ArrowBackIcon style = {{color:'#F89A3B'}}/>
        </IconButton>
      </div>
        
        
      <List>
        {['Home', 'About Us', 'Service', 'Blog', 'FAQ', 'Contact Us'].map((text, index) => (

          <ListItem 
            button  
            key = {'itemtext'+index}
            onClick = {()=> {
              props.closer();
              console.log('Open', text);
            }}
            className = {classes.itemButton}
          >

            <Typography  className = {classes.itemText}>
              {text}
            </Typography>
                
          </ListItem>
        ))}
      </List>

    </Drawer>
  );
}
