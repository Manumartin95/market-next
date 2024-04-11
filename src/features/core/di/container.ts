import { container } from 'tsyringe'
import { HTTP_CLIENT, PRODUCT_REPOSITORY } from '@/features/core/di/injection-tokens'
import { HttpClient } from '@/features/core/http/http-client'
import { InMemoryProductRepository } from '@/features/product/infrastructure/in-memory-product.repository'

export const injectContainerDependencies = () => {
  container.registerSingleton(HTTP_CLIENT, HttpClient)
  container.registerSingleton(PRODUCT_REPOSITORY, InMemoryProductRepository)
}
