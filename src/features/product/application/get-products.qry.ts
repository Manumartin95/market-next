import { Query } from '@/features/core/use-case/types/query'
import { Product } from '@/features/product/domain/product'
import type { ProductRepository } from '@/features/product/domain/product-repository'
import { inject, singleton } from 'tsyringe'
import { PRODUCT_REPOSITORY } from '@/features/core/di/injection-tokens'

@singleton()
export class GetProductsQry implements Query<Product[]> {
  constructor(@inject(PRODUCT_REPOSITORY) private readonly productRepository: ProductRepository) {}

  handle(): Promise<Product[]> {
    return this.productRepository.getProducts()
  }
}
