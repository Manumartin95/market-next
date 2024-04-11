import { ProductRepository } from '@/features/product/domain/product-repository'
import { GetProductsQry } from '@/features/product/application/get-products.qry'
import { HttpClient } from '@/features/core/http/http-client'
import { InMemoryProductRepository } from '@/features/product/infrastructure/in-memory-product.repository'
import { FindProductQry } from '@/features/product/application/find-product.qry'

export class ProductLocator {
  static httpClient = new HttpClient()
  // static repository: ProductRepository = new HttpProductRepository(this.httpClient)
  static repository: ProductRepository = new InMemoryProductRepository()

  static GetProductsQry(): GetProductsQry {
    return new GetProductsQry(this.repository)
  }

  static FindProductsQry(): FindProductQry {
    return new FindProductQry(this.repository)
  }
}
