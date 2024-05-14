'use server'
import { ProductsCatalog } from '@/features/product/delivery/client/components/ProductCatalog/ProductsCatalog'
import React, { Suspense } from 'react'
import { ProductSearchBar } from '@/features/product/delivery/client/components/ProductSearchBar/ProductSearchBar'
import { NextPage } from 'next'

const Products: NextPage<{
  params: { slug: string }
  searchParams: { [key: string]: string | undefined }
}> = async props => {
  return (
    <>
      <h2>MARKET</h2>
      <ProductSearchBar />
      <Suspense key={props.searchParams?.search} fallback={<h1>Loading...</h1>}>
        <ProductsCatalog filter={props.searchParams?.search ?? ''}></ProductsCatalog>
      </Suspense>
    </>
  )
}

export default Products
