import { Query } from '@/features/core/use-case/types/query'
import { Product } from '@/features/product/domain/product'
import { ProductRepository } from '@/features/product/domain/product-repository'

export class GetUsersQry implements Query<Product> {
  constructor(private readonly productRepository: ProductRepository) {}

  handle(): Promise<Product> {
    return this.productRepository.getProducts()
  }
}
