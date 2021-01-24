import { useContext, useState } from 'react'
import ShoppingCardContext from '../../../../interfaces/types/ShoppingCardContext'
import { ShoppingCartContext } from '../../../../providers/ShoppingCardProvider'
import ProductInterface from '../../../../interfaces/ProductInterface'

const useHandleFunction = (product: ProductInterface) => {
  const [checked, setChecked] = useState(product.checked)
  const [shoppingCart, setShoppingCart] = useContext<ShoppingCardContext>(ShoppingCartContext)

  const handleRemoveProduct = () => {
    let newState = [...shoppingCart]
    newState = newState.filter((currentProduct) => currentProduct.id !== product.id)
    setShoppingCart(newState)
  }

  const handleToggle = () => {
    const productIndex = shoppingCart.findIndex((productInBasket) => productInBasket.id === product.id)
    const newState: ProductInterface[] = [...shoppingCart]
    const currentProduct: ProductInterface = { ...newState[productIndex] }
    currentProduct.checked = !checked
    newState[productIndex] = currentProduct

    setChecked(!checked)
    setShoppingCart(newState)
  }

  return {
    checked,
    handleRemoveProduct,
    handleToggle
  }
}

export default useHandleFunction
