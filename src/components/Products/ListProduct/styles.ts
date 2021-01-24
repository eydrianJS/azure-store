import { makeStyles } from '@material-ui/core'

export default makeStyles({
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  parent: {
    '&:hover ': {
      backgroundColor: '#D4D9DB'
    },
    margin: 2,
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    width: '90%'
  },
  children: {
    width: '10%',
    margin: 20,
    textAlign: 'left',
    height: 100
  }
})
