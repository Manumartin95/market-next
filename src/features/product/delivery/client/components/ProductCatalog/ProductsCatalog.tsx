import { FC } from 'react'
import { Product } from '@/features/product/domain/product'
import { ProductCard } from '@/features/product/delivery/client/components/ProductCard/ProductCard'
import styles from './ProductsCatalog.module.css'

export const ProductsCatalog: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <ul className={styles['product-list']}>
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product}></ProductCard>
        </li>
      ))}
    </ul>
  )
}
