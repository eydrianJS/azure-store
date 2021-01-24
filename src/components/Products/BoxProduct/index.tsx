import React from 'react'
import useStyles from './styles'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import IconButton from '@material-ui/core/IconButton'
import ProductInterface from '../../../interfaces/ProductInterface'
import { Link } from 'react-router-dom'

interface BoxProductParams {
  product: ProductInterface
}

const BoxProduct = ({ product }: BoxProductParams) => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/product/${product._id}`}>
        <CardMedia
          component="img"
          alt={product.image}
          image={product.image}
          title="Contemplative Reptile"
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom={true} variant="h6" component="h5">
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default BoxProduct
