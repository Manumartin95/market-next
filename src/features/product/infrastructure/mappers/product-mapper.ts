import { ProductDto } from '@/features/product/domain/product.dto'
import { Product } from '@/features/product/domain/product'

export class ProductMapper {
  static toDomain(productDto: ProductDto): Product {
    return new Product(productDto.id, productDto.title, productDto.description, productDto.category, productDto.images)
  }

  static toDomainList(products: ProductDto[]): Product[] {
    return products.map(product => this.toDomain(product))
  }
}
