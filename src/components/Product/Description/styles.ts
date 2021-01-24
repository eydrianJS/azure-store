import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
})
