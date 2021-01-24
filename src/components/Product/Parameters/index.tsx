import React from 'react'
import Paper from '@material-ui/core/Paper'
import useStyle from './styles'

const Parameters = () => {
  const classes = useStyle()
  return <Paper className={classes.paper}>Parameters</Paper>
}

export default Parameters
