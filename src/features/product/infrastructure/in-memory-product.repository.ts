import { ProductRepository } from '@/features/product/domain/product-repository'
import { Product } from '@/features/product/domain/product'
import { HttpProductMother } from '@/features/product/infrastructure/mother/http-product.mother'
import { ProductMapper } from '@/features/product/infrastructure/mappers/product-mapper'

export class InMemoryProductRepository implements ProductRepository {
  async getProducts(): Promise<Product[]> {
    return ProductMapper.toDomainList(HttpProductMother.ProductList)
  }

  async findProduct(filter: string): Promise<Product[]> {
    return ProductMapper.toDomainList(HttpProductMother.ProductList).filter(product => product.title.includes(filter))
  }
}
