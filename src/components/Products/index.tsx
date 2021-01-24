import React from 'react'
import BoxProduct from './BoxProduct'
import ListProduct from './ListProduct'
import ProductInterface from '../../interfaces/ProductInterface'
import useInitialProductsList from './effects/useInitialProductsList'

interface ProductsParams {
  list: boolean
}

const Products = ({ list }: ProductsParams) => {
  const products = useInitialProductsList()

  return (
    <>
      {products
        ? products.map((product: ProductInterface) => {
            return list ? (
              <ListProduct product={product} key={product._id} />
            ) : (
              <BoxProduct product={product} key={product._id} />
            )
          })
        : false}
    </>
  )
}

export default Products
