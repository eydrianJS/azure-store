import { useContext, useCallback } from 'react'
import { ShoppingCartContext } from '../../../providers/ShoppingCardProvider'
import ShoppingCardContextInterface from '../../../interfaces/types/ShoppingCardContext'
import ProductInterface from '../../../interfaces/ProductInterface'

const useAddProduct = (product: ProductInterface, counterOfProduct: number) => {
  const [shoppingCart, setShoppingCart] = useContext<ShoppingCardContextInterface>(ShoppingCartContext)

  const addProduct = useCallback(() => {
    const productIndex = shoppingCart.findIndex((productInBasket) => productInBasket._id === product._id)
    let newState: ProductInterface[] = [...shoppingCart]
    if (productIndex !== -1) {
      const copyProduct: ProductInterface = { ...newState[productIndex] }
      if (copyProduct.counterOfProduct && copyProduct.counterOfProduct + counterOfProduct > copyProduct.maxCount) {
        alert(
          'Produkty w koszyku łącznie z dodanymi przekraczają maksymalną ilość. Koszyk zostanie wypełniony do maksymalnej ilości'
        )
        copyProduct.counterOfProduct = copyProduct.maxCount
      } else if (copyProduct.counterOfProduct) {
        copyProduct.counterOfProduct = copyProduct.counterOfProduct + counterOfProduct
      }
      copyProduct.checked = true
      newState[productIndex] = copyProduct
    } else {
      newState = [...shoppingCart, { ...product, counterOfProduct, checked: true }]
    }

    setShoppingCart(newState)
    alert('Produkty zostały dodane')
  }, [product, shoppingCart, counterOfProduct, setShoppingCart])

  return addProduct
}

export default useAddProduct
