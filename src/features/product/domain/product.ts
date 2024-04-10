export class Product {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly category: {}
  readonly images: string[]

  constructor(
    id: string,
    title: string,
    description: string,
    category: {},
    images: string[],
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.images = images
  }
}
