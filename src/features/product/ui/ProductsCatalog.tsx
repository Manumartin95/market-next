import { container } from 'tsyringe'
import { GetProductsQry } from '@/features/product/application/get-products.qry'
import { useEffect, useState } from 'react'
import { Product } from '@/features/product/domain/product'
import { ProductCard } from '@/features/product/ui/ProductCard/ProductCard'
import styles from './ProductsCatalog.module.css'

export const ProductsCatalog = () => {
  const useCase = container.resolve(GetProductsQry)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    useCase.handle().then(response => {
      setProducts(response)
    })
  }, [useCase])

  return (
    <ul className={styles['product-list']}>
      {products.map(product => (
        <li key={product.id}>
          <ProductCard {...product}></ProductCard>
        </li>
      ))}
    </ul>
  )
}
