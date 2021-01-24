export default interface Product {
  _id: string
  title: string
  content: string
  image: string
  images: string[]
  price: number | null
  maxCount: number
  counterOfProduct?: number
  checked?: boolean
}
