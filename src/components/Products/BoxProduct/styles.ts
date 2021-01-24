import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  root: {
    maxWidth: 260,
    padding: theme.spacing(1),
    margin: theme.spacing(1)
  },
  image: {
    height: 220
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})
