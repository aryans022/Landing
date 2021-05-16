import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  flex: {
    flexGrow: 1
  },
  navbar: {
    background: '#F89A3B',
    position: 'sticky'
  },
  iconButton: {
    border:'none',
    outline:'none',
  },
  title: {
    fontWeight: 'bold',
    padding:'10px 0px 10px 0px',
    pointerEvents: 'auto'
  }
});