import { useState, useEffect } from 'react'
import ProductInterface from '../../../interfaces/ProductInterface'
import { getProducts } from '../service'

const useInitialProductsList = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  useEffect(() => {
    getProducts()
      .then((response) => response.data)
      .then((products) => setProducts(products))
  }, [])

  return products
}

export default useInitialProductsList
