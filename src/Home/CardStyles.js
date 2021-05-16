import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  card: {
    width: '300px'
  },
  premium: {
    fontSize: '14px',
    background: '#F89A3B',
    color: 'white',
    width: '70px',
    float: 'right',
    borderRadius: '10px 0px 0px 10px',
    padding: '2px 0px 2px 10px',
    marginTop: '10px'
  },
  image: {
    height: '80px',
    width: '80px',
    borderRadius: '80px',
    marginLeft: '20px',
    marginBottom: '20px'
  },
  upper: {
    marginTop: '60px'
  },
  phone: {
    paddingTop:'10px'
  },
  phoneNumber: {
    paddingTop:'5px',
    marginRight:'50px',
    fontSize: '14px',
    color: '#888888',
    fontWeight: 'bold'
  },
  name: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginTop:'8px'
  },
  head: {
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '15px',
  },
  text: {
    fontSize: '14px',
    marginLeft: '15px',
  },
  renew: {
    textTransform: 'none',
    background: '#F89A3B',
    color: 'white',
    fontSize: '15px',
    padding:'5px',
    fontWeight: 'bold',
    marginBottom: '20px',
    '&:hover': {
      background: '#F89A3B',
    }
  },
  cancel: {
    textTransform: 'none',
    background: 'white',
    color: '#AAAAAA',
    border: '1px solid #AAAAAA',
    fontSize: '15px',
    padding:'5px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
});