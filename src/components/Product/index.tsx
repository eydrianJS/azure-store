import React from 'react'
import Paper from '@material-ui/core/Paper'
import useStyles from './styles'
import ImagesCarousel from './ImagesCarousel'
import MainInformation from './MainInformation'
import Parameters from './Parameters'
import Description from './Description'
import useInitialProducts from './effects/useInitialProducts'

interface ProductParams {
  id: string
}

const Product = ({ id }: ProductParams) => {
  const classes = useStyles()

  const product = useInitialProducts(id)

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.image}>
          <ImagesCarousel images={product.images} />
        </div>
        <div style={{ width: '50%', margin: 30 }}>
          <MainInformation product={product} />
        </div>
      </Paper>
      <Parameters />
      <Description />
    </>
  )
}

export default Product
