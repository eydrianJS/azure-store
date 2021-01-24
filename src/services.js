import axios from 'axios'

const CONFIG = {
  baseUrl: 'https://store-shop.azurewebsites.net/api',
  key: 'HCCabZMjZZy0n7FECDCl4SNmlUJRXrLoD6EoPziSLaRDe2YNgN69jw=='
}

const getUrl = (url) => `${CONFIG.baseUrl}/${url}?code=${CONFIG.key}&`

export const getData = async (url, param = '') => {
  return await axios.get(`${getUrl(url)}${param}`)
}
