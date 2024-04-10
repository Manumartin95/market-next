import { ProductRepository } from '@/features/product/domain/product-repository'
import { HttpClient } from '@/features/core/http/http-client'
import { Product } from '@/features/product/domain/product'
import { singleton } from 'tsyringe'
import { ProductMapper } from '@/features/product/infrastructure/mappers/product-mapper'
import { ProductDto } from '@/features/product/domain/product.dto'

@singleton()
export class HttpProductRepository implements ProductRepository {
  readonly productsPath = '/products'

  constructor(private readonly httpClient: HttpClient) {}

  async getProducts(): Promise<Product[]> {
    return this.httpClient
      .get<ProductDto[]>(this.productsPath)
      .then(response => response.data)
      .then(data => ProductMapper.toDomainList(data))
  }
}
