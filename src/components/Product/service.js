import { getData } from '../../services'

export const getProduct = async (id) => {
  return await getData('getProducts', `id=${id}`)
}
