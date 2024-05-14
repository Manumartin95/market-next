import { ProductRepository } from '@/features/product/domain/product-repository'
import { FindProductQry } from '@/features/product/application/find-product.qry'
import { mock } from 'jest-mock-extended'

describe('FindProductQry', () => {
  const setup = () => {
    const productRepository = mock<ProductRepository>()

    return {
      findProductQry: new FindProductQry(productRepository),
      productRepository,
    }
  }

  it('should call findProduct', async () => {
    const { findProductQry, productRepository } = setup()

    await findProductQry.handle('foo')

    expect(productRepository.findProduct).toHaveBeenCalledWith('foo')
  })
})
