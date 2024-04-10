import { container } from 'tsyringe'
import { HttpProductRepository } from '@/features/product/infrastructure/http-product-repository'
import { HTTP_CLIENT, PRODUCT_REPOSITORY } from '@/features/core/di/injection-tokens'
import { HttpClient } from '@/features/core/http/http-client'

export const injectContainerDependencies = () => {
  container.registerSingleton(HTTP_CLIENT, HttpClient)
  container.registerSingleton(PRODUCT_REPOSITORY, HttpProductRepository)
}
