export interface ProductDto {
  id: number
  title: string
  description: string
  images: string[]
  price: number
  creationAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }
}
