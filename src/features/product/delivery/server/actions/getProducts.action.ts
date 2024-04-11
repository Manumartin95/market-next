'use server'
import { ProductLocator } from '@/features/product/delivery/server/locator/product.locator'

export const GetProductsAction = async () => {
  const useCase = ProductLocator.GetProductsQry()

  const products = await useCase.handle().then(products => products.map(product => product.toPrimitives()))

  return { data: products }
}
