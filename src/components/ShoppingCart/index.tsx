import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import useStyle from './styles'
import { ShoppingCartContext } from '../../providers/ShoppingCardProvider'
import List from '@material-ui/core/List'
import SummaryList from './SummaryList'
import ShoppingCardContext from '../../interfaces/types/ShoppingCardContext'

const ShoppingCart = () => {
  const classes = useStyle()
  const [shoppingCart, setShoppingCart] = useContext<ShoppingCardContext>(ShoppingCartContext)

  return (
    <Paper className={classes.paper}>
      <List className={classes.root}>
        {shoppingCart.map((product, idx) => (
          <SummaryList key={idx} product={product} idx={idx} setShoppingCart={setShoppingCart} />
        ))}
      </List>
    </Paper>
  )
}

export default ShoppingCart
