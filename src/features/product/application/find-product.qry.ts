import { Query } from '@/features/core/use-case/types/query'
import { Product } from '@/features/product/domain/product'
import { ProductRepository } from '@/features/product/domain/product-repository'

export class FindProductQry implements Query<Product[], string> {
  constructor(private readonly productRepository: ProductRepository) {}

  handle(param: string): Promise<Product[]> {
    return this.productRepository.findProduct(param)
  }
}
