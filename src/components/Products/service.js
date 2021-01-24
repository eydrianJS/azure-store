import { getData } from '../../services'

export const getProducts = async () => {
  return await getData('getProducts')
}
