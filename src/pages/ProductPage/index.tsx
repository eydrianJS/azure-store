import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Product from '../../components/Product'
import ShopPageLayout from '../../components/ShopPageLayout'

interface ProductPageParams extends RouteComponentProps<{ id: string }> {}

const ProductPage = ({ match }: ProductPageParams) => {
  return <ShopPageLayout Page={<Product id={match.params.id} />} />
}

export default ProductPage
