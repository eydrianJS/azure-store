import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  summary: {
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})
