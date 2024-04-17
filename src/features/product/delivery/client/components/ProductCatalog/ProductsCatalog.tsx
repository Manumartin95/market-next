'use server'
import { FC } from 'react'
import { ProductCard } from '@/features/product/delivery/client/components/ProductCard/ProductCard'
import styles from './ProductsCatalog.module.css'
import { Product } from '@/features/product/domain/product'
import { FindProductsAction } from '@/features/product/delivery/server/actions/findProducts.action'

export const ProductsCatalog: FC<{ filter: string }> = async ({ filter }) => {
  const products: Product[] = await FindProductsAction(filter).then(response =>
    response.data.map(product => Product.fromPrimitives(product)),
  )

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
