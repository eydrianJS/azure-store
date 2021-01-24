import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classes from './styles.module.css'
import ProductInterface from '../../interfaces/ProductInterface'
import useChangeCounterOnShoppingCart from './effects/useChangeCounterOnShoppingCart'

interface ItemCounterParams {
  counterMechanism: {
    decrementDisable: any
    handleChange: any
    handleDecrement: any
    handleIncremet: any
    incrementDisable: any
    counter: any
  }
  product?: ProductInterface
}

const ItemCounter = ({ counterMechanism, product }: ItemCounterParams) => {
  const {
    decrementDisable,
    handleChange,
    handleDecrement,
    handleIncremet,
    incrementDisable,
    counter
  } = counterMechanism
  const changeCouterOnShoppingCart = useChangeCounterOnShoppingCart(product, counter)

  return (
    <div className={classes.counterBox} onBlur={changeCouterOnShoppingCart}>
      <Button
        onClick={handleDecrement}
        variant="contained"
        color="primary"
        className={classes.counterButtons}
        disabled={decrementDisable}>
        -
      </Button>
      <TextField
        id="outlined-basic"
        label="Ilosc sztuk"
        variant="outlined"
        value={counter}
        className={classes.counter}
        onChange={handleChange}
      />
      <Button
        onClick={handleIncremet}
        variant="contained"
        color="primary"
        className={classes.counterButtons}
        disabled={incrementDisable}>
        +
      </Button>
    </div>
  )
}

export default ItemCounter
