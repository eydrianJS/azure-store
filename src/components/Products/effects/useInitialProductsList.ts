import { useState, useEffect } from 'react'
import ProductInterface from '../../../interfaces/ProductInterface'

const useInitialProductsList = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  useEffect(() => {
    // getProducts().then(
    //   async (productsFromDb: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> | null) => {
    //     if (productsFromDb) {
    //       const mappedProducts = await getMappedProducts(productsFromDb)
    //       setProducts(mappedProducts)
    //     }
    //   }
    // )
    setProducts([
      {
        id: '1',
        title: 'aaa',
        content: 'string',
        image: 'string',
        images: ['hh'],
        price: 12,
        maxCount: 22,
        counterOfProduct: 22,
        checked: false
      }
    ])
  }, [])

  return products
}

export default useInitialProductsList
