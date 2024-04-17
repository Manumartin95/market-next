'use server'
import { ProductLocator } from '@/features/product/delivery/server/locator/product.locator'

export const FindProductsAction = async (filter: string) => {
  const useCase = ProductLocator.FindProductsQry()

  const products = await useCase.handle(filter).then(products => products.map(product => product.toPrimitives()))

  return { data: products }
}
