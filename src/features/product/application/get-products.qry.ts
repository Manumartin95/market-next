import { Query } from '@/features/core/use-case/types/query'
import { Product } from '@/features/product/domain/product'
import type { ProductRepository } from '@/features/product/domain/product-repository'

export class GetProductsQry implements Query<Product[]> {
  constructor(private readonly productRepository: ProductRepository) {}

  handle(): Promise<Product[]> {
    return this.productRepository.getProducts()
  }
}
