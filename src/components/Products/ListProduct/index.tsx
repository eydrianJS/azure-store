import React from 'react'
import useStyles from './styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ProductInterface from '../../../interfaces/ProductInterface'
import { Link } from 'react-router-dom'

interface ListProductParams {
  product: ProductInterface
}
const ListProduct = ({ product }: ListProductParams) => {
  const classes = useStyles()

  return (
    <Grid
      container={true}
      direction="column"
      justify="center"
      alignItems="flex-start"
      className={classes.root}
      component={Link}
      to={`/product/${product.id}`}>
      <Paper elevation={3} className={classes.parent}>
        <img alt={product.image} src={product.image} title="Contemplative Reptile" className={classes.children} />
        <Grid
          container={true}
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.children}>
          <Typography gutterBottom={true} variant="h6" component="h5">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.content}
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ListProduct
