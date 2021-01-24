const getProduct = async (product: any) => {
  // const productData = product.data()
  // const images: string[] = []
  // let mainImage = ''
  // // if (productData.image) {
  // //   for (const image of productData.image) {
  // //     const nextImage = await getImage(image)
  // //     if (image === productData.mainImage) mainImage = nextImage
  // //     images.push(nextImage)
  // //   }
  // }
  // const mappedProduct: ProductInterface = {
  //   ...productData,
  //   id: product.id,
  //   images,
  //   image: mainImage
  // }

  return product.img
}

export default getProduct
