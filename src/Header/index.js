import React from 'react';
import Navbar from "./Navbar";
import OptionBar from "./OptionBar";
import CustomDrawer from "./Drawer";
import { useStyles } from './HeaderStyles';

export default function Header() {      
  
  const classes = useStyles();
  
  //drawer state
  const [open, setOpen] = React.useState(false);                
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <center className={classes.head} style = {{zIndex:1100}}>
      <Navbar isOpen = {open} opener = {handleDrawerOpen}/>
      <OptionBar />
      <CustomDrawer isOpen = {open} closer = {handleDrawerClose} />
    </center>
  );
}
