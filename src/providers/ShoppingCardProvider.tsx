import React from 'react'
import ProductInterface from '../interfaces/ProductInterface'
import ShoppingCardContext from '../interfaces/types/ShoppingCardContext'

interface ShoppingCardProviderParams {
  children: React.ReactNode
  values: [ProductInterface[], (newState: ProductInterface[]) => void]
}

export const ShoppingCartContext = React.createContext<ShoppingCardContext>([[], () => {}])

export const ShoppingCartProvider = ({ children, values }: ShoppingCardProviderParams) => {
  return <ShoppingCartContext.Provider value={values}>{children}</ShoppingCartContext.Provider>
}
