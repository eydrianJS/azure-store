import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useStyle from './styles'
import ProductInterface from '../../../interfaces/ProductInterface'
import ItemCounter from '../../ItemCounter'
import useCounterMechanism from '../../../effects/useCounterMechanism'
import AddToBusket from '../../../components/AddToBasket'
import CounterMechanismInterface from '../../../interfaces/CounterMechanismInterface'

interface MainInformationParams {
  product: ProductInterface
}

const INITIAL_COUNTER: number = 1

const MainInformation = ({ product }: MainInformationParams) => {
  const classes = useStyle()
  const counterMechanism: CounterMechanismInterface = useCounterMechanism(product.maxCount, INITIAL_COUNTER)

  return (
    <Grid container={true} direction="column" justify="flex-start" alignItems="flex-start" className={classes.children}>
      <div className={classes.description}>
        <Typography gutterBottom={true} variant="h2" component="h2">
          {product.title}
        </Typography>
        <Typography variant="h4" component="p">
          {product.content}
        </Typography>
        <Typography variant="h3" component="p">
          {product.price} zł
        </Typography>
      </div>
      <Grid container={true} direction="column" justify="flex-end" alignItems="flex-start" className={classes.buttons}>
        <Typography variant="body2" component="div" className={classes.counter}>
          <ItemCounter counterMechanism={counterMechanism} />
        </Typography>
        <AddToBusket product={product} counterOfProduct={counterMechanism.counter} />
        <Button variant="contained" color="primary" className={classes.margin}>
          Kup teraz
        </Button>
      </Grid>
    </Grid>
  )
}

export default MainInformation
