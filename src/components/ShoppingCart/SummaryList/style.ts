import { makeStyles } from '@material-ui/core'

export default makeStyles({
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  parent: {
    display: 'flex',
    width: '100%'
  },
  children: {
    width: '10%',
    margin: 20,
    textAlign: 'left',
    height: 100
  },
  counter: {
    margin: 40,
    right: 60,
    position: 'absolute'
  },
  deleteIcon: {
    margin: 50,
    right: 0,
    position: 'absolute',
    fontSize: 40,
    color: 'red'
  },
  icon: {
    fontSize: 40,
    color: '#8c7c73'
  }
})
