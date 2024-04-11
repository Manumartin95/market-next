import { ProductRepository } from '@/features/product/domain/product-repository'
import { Product } from '@/features/product/domain/product'
import { ProductMother } from '@/features/product/infrastructure/mother/product.mother'
import { ProductMapper } from '@/features/product/infrastructure/mappers/product-mapper'

export class InMemoryProductRepository implements ProductRepository {
  async getProducts(): Promise<Product[]> {
    return ProductMapper.toDomainList(ProductMother.ProductList)
  }
}
