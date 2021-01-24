import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    minHeight: 600,
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  },
  summary: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  image: {
    width: '50%',
    float: 'left'
  },
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  }
})
