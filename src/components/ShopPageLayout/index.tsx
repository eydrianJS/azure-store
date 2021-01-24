import React, { useContext } from 'react'
import useStyles from './styles'
import Navbar from '../../components/Navbar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

interface ShopPageLayoutParams {
  Page: React.ReactNode
}

const ShopPageLayout = ({ Page }: ShopPageLayoutParams) => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Navbar />
      <div className={classes.root}>
        <Container>
          <CssBaseline />
          {Page}
        </Container>
      </div>
    </main>
  )
}

export default ShopPageLayout
