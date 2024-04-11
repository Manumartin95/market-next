import { HttpProductDto } from '@/features/product/infrastructure/dtos/http-product.dto'
import { Product } from '@/features/product/domain/product'

export class ProductMapper {
  static toDomain(productDto: HttpProductDto): Product {
    return new Product({
      id: productDto.id,
      title: productDto.title,
      description: productDto.description,
      category: productDto.category.name,
      images: productDto.images,
    })
  }

  static toDomainList(products: HttpProductDto[]): Product[] {
    return products.map(product => this.toDomain(product))
  }
}
