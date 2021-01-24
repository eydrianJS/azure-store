import axios from 'axios'

const CONFIG = {
  baseUrl: 'https://store-shop.azurewebsites.net/api',
  key: 'AIxuzvsDVwvuAJC0YrVcWrMyqRjNbvgUrFPax9fIYqvnJoSY9KPvTA=='
}

const getUrl = (url) => `${CONFIG.baseUrl}/${url}?code=${CONFIG.key}`

export const getData = async (url) => {
  await axios.get(getUrl(url))
}
