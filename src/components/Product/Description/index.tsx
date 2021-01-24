import React from 'react'
import Paper from '@material-ui/core/Paper'
import useStyle from './styles'

const Description = () => {
  const classes = useStyle()
  return <Paper className={classes.paper}>Descriptions</Paper>
}

export default Description
