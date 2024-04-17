'use server'
import { ProductsCatalog } from '@/features/product/delivery/client/components/ProductCatalog/ProductsCatalog'
import React, { Suspense } from 'react'
import { ProductSearchBar } from '@/features/product/delivery/client/components/ProductSearchBar/ProductSearchBar'
import { NextPage } from 'next'

const Products: NextPage<{
  params: { slug: string }
  searchParams: { [key: string]: string | undefined }
}> = async props => {
  // const [, transitionStartFunction] = useTransition()
  // const [products, setProducts] = useState<Product[]>([])

  // useEffect(() => {
  //   const startTransition = () =>
  //     transitionStartFunction(() => {
  //       console.log(pageProps, router)
  //       GetProductsAction().then(response => {
  //         setProducts(response.data.map(product => Product.fromPrimitives(product)))
  //       })
  //     })
  //
  //   if (products.length === 0) {
  //     startTransition()
  //   }
  // }, [products, pageProps])
  //
  // const findProducts = (filter: string) => {
  //   transitionStartFunction(() => {
  //     FindProductsAction(filter).then(response => {
  //       setProducts(response.data.map(product => Product.fromPrimitives(product)))
  //     })
  //   })
  // }

  return (
    <>
      <ProductSearchBar />
      <Suspense key={props.searchParams.search} fallback={<h1>Loading...</h1>}>
        <ProductsCatalog filter={props.searchParams.search ?? ''}></ProductsCatalog>
      </Suspense>
    </>
  )
}

export default Products
