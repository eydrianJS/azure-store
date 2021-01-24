import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  root: {
    width: '100%',
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  image: {
    height: 220
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    minHeight: 600,
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
})
