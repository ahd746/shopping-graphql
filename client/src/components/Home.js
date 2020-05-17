import React, { useEffect } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import { useQuery } from '@apollo/react-hooks';
import { getProductsQuery } from '../queries'

export default function Home() {
  const { data, loading, error, refetch } = useQuery(getProductsQuery)
  useEffect(() => { refetch() })

  if (loading) { return <div>Loading...</div>; }
  if (error) {
    console.error(error);
    return <div>{`Error! ${error.message}`}</div>;
  }

  return (
    <>
      <Banner />
      <ProductList products={data.Product} />
    </>
  )
}

