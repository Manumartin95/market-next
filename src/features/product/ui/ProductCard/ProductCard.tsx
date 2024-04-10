import { FC } from 'react'
import { Product } from '@/features/product/domain/product'
import styles from './ProductCard.module.css'

export const ProductCard: FC<Product> = product => {
  return (
    <div className={styles['product-card']}>
      <img src={product.images[0]} alt="" width="100%" height={150} />
      <strong>{product.title}</strong>
      <span>{product.category}</span>
    </div>
  )
}
