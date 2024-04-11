import { Image } from '@/features/product/domain/value-object/image.value-object'

export class Product {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly category: string
  readonly images: Image[]

  constructor(id: number, title: string, description: string, category: string, images: string[]) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.images = images.map(image => Image.create(image))
  }
}
