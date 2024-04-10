'use client'
import 'reflect-metadata'
import styles from './page.module.css'
import { injectContainerDependencies } from '@/features/core/di/container'
import { ProductsCatalog } from '@/features/product/ui/ProductsCatalog'

export default function Home() {
  injectContainerDependencies()

  return (
    <main className={styles.main}>
      <h1>MARKET</h1>
      <ProductsCatalog></ProductsCatalog>
    </main>
  )
}
