import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    background: '#F89A3B',
    position: 'sticky'
  },
  buttonText: {
    color: 'white',
    fontSize: '14px',
    fontFamily: 'Arial',
  },
  selected: {
    borderBottom: '3px solid #FFFFFF',
  }
});