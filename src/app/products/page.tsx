'use client'
import { ProductsCatalog } from '@/features/product/delivery/client/components/ProductCatalog/ProductsCatalog'
import { GetProductsAction } from '@/features/product/delivery/server/actions/getProducts.action'
import { useEffect, useState, useTransition } from 'react'
import { Product } from '@/features/product/domain/product'

export default function Products() {
  const productsAction = GetProductsAction()
  let [, transitionStartFunctions] = useTransition()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const startTransition = () =>
      transitionStartFunctions(() => {
        productsAction.then(response => {
          setProducts(response.data.map(product => Product.fromPrimitives(product)))
        })
      })

    if (products.length === 0) {
      startTransition()
    }
  }, [products])

  return <ProductsCatalog products={products}></ProductsCatalog>
}
