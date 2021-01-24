import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Button, Typography, InputBase, Badge } from '@material-ui/core/'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import useStyles from './styles'
import ProfileMenu from './ProfileMenu'
import ShoppingCardContext from '../../interfaces/types/ShoppingCardContext'
import { ShoppingCartContext } from '../../providers/ShoppingCardProvider'

const Navbar = () => {
  const classes = useStyles()
  const menuId = 'primary-search-account-menu'
  const [buttonMenu, setButtonMenu] = React.useState<null | HTMLElement>(null)
  const [shoppingCart] = useContext<ShoppingCardContext>(ShoppingCartContext)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setButtonMenu(event.currentTarget)
  }

  const handleProfileMenuClose = () => {
    setButtonMenu(null)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap component={Link} to="/">
            Store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search item"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              aria-label={`show ${shoppingCart.length} items in shopping cart`}
              color="inherit"
              component={Link}
              to="/shoppingCart">
              <Badge badgeContent={shoppingCart.length} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ProfileMenu menuId={menuId} buttonMenu={buttonMenu} handleMenuClose={handleProfileMenuClose} />
    </div>
  )
}

export default Navbar
