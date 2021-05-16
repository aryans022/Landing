import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  drawerPaper: {
    width: 300,
    '@media (max-width:599px)': {
      width:"100%"
    }
  },
  drawerHeader: {
    paddingBottom: '50px'
  },
  itemText: {
    fontFamily: 'Arial',
    fontSize: '25px',
    padding: "5px 0px 5px 50px"
  },
  itemButton: {
    color: '#F89A3B',
    "&:hover": {
      backgroundColor: '#F89A3B',
      color: "white"
    }
  }
});