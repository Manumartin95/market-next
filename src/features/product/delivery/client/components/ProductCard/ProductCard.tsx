import { FC } from 'react'
import { Product } from '@/features/product/domain/product'
import styles from './ProductCard.module.css'

export const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles['product-card']}>
      <img className={styles['product-card__image']} src={product.images[0].value} alt="" width="100%" height={150} />
      <div className={styles['product-card__info']}>
        <strong>{product.title}</strong>
        <span>{product.category}</span>
      </div>
    </div>
  )
}
