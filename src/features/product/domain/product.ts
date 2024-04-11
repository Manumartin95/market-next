import { Image } from '@/features/product/domain/value-object/image.value-object'
import { ProductPrimitives } from '@/features/product/domain/product.primitives'

export class Product {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly category: string
  readonly images: Image[]

  constructor(primitives: ProductPrimitives) {
    this.id = primitives.id
    this.title = primitives.title
    this.description = primitives.description
    this.category = primitives.category
    this.images = primitives.images.map(image => Image.create(image))
  }

  static fromPrimitives(primitives: ProductPrimitives) {
    return new Product(primitives)
  }

  toPrimitives(): ProductPrimitives {
    return {
      id: this.id,
      category: this.category,
      title: this.title,
      description: this.description,
      images: this.images.map(image => Image.toPrimitives(image)),
    }
  }
}
