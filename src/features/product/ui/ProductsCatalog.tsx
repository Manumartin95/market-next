import { container } from 'tsyringe'
import { GetProductsQry } from '@/features/product/application/get-products.qry'
import { useEffect, useState } from 'react'
import { Product } from '@/features/product/domain/product'

export const ProductsCatalog = () => {
  const useCase = container.resolve(GetProductsQry)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    useCase.handle().then(response => {
      setProducts(response)
    })
  }, [useCase])

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}
