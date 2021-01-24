import React from 'react'
import Button from '@material-ui/core/Button'
import useStyle from './styles'
import ProductInterface from '../../interfaces/ProductInterface'
import useAddProduct from './effects/useAddProduct'

interface AddToBasketParams {
  product: ProductInterface
  counterOfProduct: number
}

const AddToBasket = ({ product, counterOfProduct }: AddToBasketParams) => {
  const classes = useStyle()
  const addProduct = useAddProduct(product, counterOfProduct)

  return (
    <Button variant="contained" color="primary" className={classes.margin} onClick={addProduct}>
      Dodaj do koszyka
    </Button>
  )
}

export default AddToBasket
