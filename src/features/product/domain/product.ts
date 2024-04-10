export class Product {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly category: string
  readonly images: string[]

  constructor(id: number, title: string, description: string, category: string, images: string[]) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.images = images
  }
}
