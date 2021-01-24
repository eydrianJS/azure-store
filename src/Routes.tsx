import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import StorePage from './pages/Store'
import ProductPage from './pages/ProductPage'
import ShoppingCartPage from './pages/ShoppingCartPage'
import ProductInterface from './interfaces/ProductInterface'
import { ShoppingCartProvider } from './providers/ShoppingCardProvider'

interface RoutesParams {}

const Routes = (routesParams: RoutesParams) => {
  const [shoppingCart, setShoppingCart] = useState<ProductInterface[]>([])

  return (
    <ShoppingCartProvider values={[shoppingCart, setShoppingCart]}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/product/:id" component={ProductPage} />
        <Route exact path="/shoppingCart" component={ShoppingCartPage} />
      </Switch>
    </ShoppingCartProvider>
  )
}

export default Routes
