import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  footer: {
    width: '100vw',
    height: '80px',
    position: 'absolute',
    bottom: '0px'
  },
  footerGrid: {
    height: '80px'
  },
  box: {
    height: '80px',
  },
  icon: {
    height: '40px',
    width: '30px',
    paddingTop: '5px'
  },
  iconText: {
    fontSize: '15px',
  },
  iconButton: {
    padding:'0px',
    textTransform: 'none',
    width: '25vw',
    borderRadius: '0px'
  },
  iconSelected: {
    borderTop: '2px solid #F89A3B',
  }
});