import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  root: {
    flexGrow: 1
  },
  formControl: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    minHeight: '80vh',
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})
