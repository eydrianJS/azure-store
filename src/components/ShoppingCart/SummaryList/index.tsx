import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Checkbox from '@material-ui/core/Checkbox'
import ProductInterface from '../../../interfaces/ProductInterface'
import ItemCounter from '../../ItemCounter'
import useStyle from './style'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useCounterMechanism from '../../../effects/useCounterMechanism'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import CounterMechanismInterface from '../../../interfaces/CounterMechanismInterface'
import useHandleFunction from './effects/useHandleFunction'

interface SummaryListParams {
  product: ProductInterface
  idx: number
  setShoppingCart: (newState: ProductInterface[]) => void
}

export default function SummaryList({ product, idx }: SummaryListParams) {
  const classes = useStyle()
  const counterMechanism: CounterMechanismInterface = useCounterMechanism(product.maxCount, product.counterOfProduct)
  const { checked, handleRemoveProduct, handleToggle } = useHandleFunction(product)

  return (
    <ListItem role={undefined} className={classes.root}>
      <Grid
        container={true}
        direction="column"
        justify="space-between"
        alignItems="flex-start"
        className={classes.parent}>
        <Paper elevation={3} className={classes.parent}>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': product._id }}
            className={classes.children}
            onClick={handleToggle}
          />
          <img alt="Product" src={product.image} title="Contemplative Reptile" className={classes.children} />
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
          <Typography variant="body2" component="div" className={classes.counter}>
            <ItemCounter counterMechanism={counterMechanism} product={product} />
          </Typography>
          <Typography variant="body2" component="div" className={classes.deleteIcon}>
            <DeleteForeverIcon className={classes.icon} onClick={handleRemoveProduct} />
          </Typography>
        </Paper>
      </Grid>
    </ListItem>
  )
}
