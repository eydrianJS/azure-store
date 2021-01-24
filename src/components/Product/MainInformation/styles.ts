import { makeStyles } from '@material-ui/core'

export default makeStyles({
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  parent: {
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    width: '90%'
  },
  description: {
    height: '70%'
  },
  children: {
    width: '100%',
    height: '100%',
    textAlign: 'left'
  },
  buttons: {
    width: '100%',
    height: '30%',
    textAlign: 'left'
  },
  margin: {
    marginTop: 3,
    width: '100%'
  }
})
