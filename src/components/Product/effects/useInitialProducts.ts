import { useState, useEffect } from 'react'
import ProductInterface from '../../../interfaces/ProductInterface'
import { getProduct } from '../service'

const initialProduct: ProductInterface = {
  _id: '',
  title: '',
  content: '',
  image: '',
  images: [],
  price: null,
  maxCount: 0
}

const useInitialProducts = (id: string) => {
  const [product, setProduct] = useState<ProductInterface>(initialProduct)

  useEffect(() => {
    getProduct(id)
      .then((response) => response.data)
      .then((products) => setProduct(products))
    setProduct({
      _id: '1',
      title: 'aaa',
      content: 'string',
      image: 'string',
      images: ['hh'],
      price: 12,
      maxCount: 22,
      counterOfProduct: 22,
      checked: false
    })
    // getProduct(id).then((productFromDb) => {
    //   if (productFromDb) {
    //     const mappedProduct = getProductMapper(productFromDb)
    //     mappedProduct.then((productFromMapper) => {
    //       setProduct(productFromMapper)
    //     })
    //   }
    // })
  }, [id])

  return product
}

export default useInitialProducts
