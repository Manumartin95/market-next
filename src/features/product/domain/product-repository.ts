import { Product } from '@/features/product/domain/product'

export interface ProductRepository {
  getProducts(): Promise<Product>
}
