import { ProductRepository } from '@/features/product/domain/product-repository'
import { GetProductsQry } from '@/features/product/application/get-products.qry'
import { mock } from 'jest-mock-extended'

describe('FindProductQry', () => {
  const setup = () => {
    const productRepository = mock<ProductRepository>()

    return {
      getProductsQry: new GetProductsQry(productRepository),
      productRepository,
    }
  }

  it('should call findProduct', async () => {
    const { getProductsQry, productRepository } = setup()

    await getProductsQry.handle()

    expect(productRepository.getProducts).toHaveBeenCalled()
  })
})
