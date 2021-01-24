import React from 'react'
import { Typography, Paper, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import Logo from '../../components/Logo'

interface HomePageParams {}

const HomePage = (homePageParams: HomePageParams) => {
  const classes = useStyles()
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5">
          Hello Guest!
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          component={Link}
          to="/store"
          className={classes.button}>
          Store
        </Button>
      </Paper>
    </main>
  )
}

export default HomePage
