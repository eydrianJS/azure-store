import React from 'react'
import { MenuItem, Menu, PopoverOrigin } from '@material-ui/core/'
const ORIGIN_VALUES: PopoverOrigin = { vertical: 'top', horizontal: 'right' }

export interface ProfileMenuParams {
  menuId: string
  handleMenuClose: () => void
  buttonMenu: null | HTMLElement
}

const ProfileMenu = ({ menuId, buttonMenu, handleMenuClose }: ProfileMenuParams) => {
  const isMenuOpen = Boolean(buttonMenu)
  return (
    <Menu
      anchorEl={buttonMenu}
      anchorOrigin={ORIGIN_VALUES}
      id={menuId}
      keepMounted
      transformOrigin={ORIGIN_VALUES}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    </Menu>
  )
}

export default ProfileMenu
