import { useContext } from 'react'
import ShoppingCardContext from '../../../interfaces/types/ShoppingCardContext'
import { ShoppingCartContext } from '../../../providers/ShoppingCardProvider'
import ProductInterface from '../../../interfaces/ProductInterface'

const useChangeCounterOnShoppingCart = (product: ProductInterface | undefined, counter: number) => {
  const [shoppingCart, setShoppingCart] = useContext<ShoppingCardContext>(ShoppingCartContext)

  const changeCouterOnShoppingCart = () => {
    if (product) {
      const productIndex = shoppingCart.findIndex(
        (productInBasket: ProductInterface) => productInBasket.id === product.id
      )
      const newState: ProductInterface[] = [...shoppingCart]
      const currentProduct: ProductInterface = { ...newState[productIndex] }
      currentProduct.counterOfProduct = counter

      newState[productIndex] = currentProduct

      setShoppingCart(newState)
    }
  }

  return changeCouterOnShoppingCart
}

export default useChangeCounterOnShoppingCart
