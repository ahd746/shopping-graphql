import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { useQuery } from '@apollo/react-hooks';
import { getProductsQuery } from '../queries'

export default function Clothing() {
  const { data, loading, error, refetch } = useQuery(getProductsQuery)
  useEffect(() => { refetch() })
  if (loading) { return <div>Loading...</div>; }
  if (error) { return <div>{`Error! ${error.message}`}</div>; }
  const filteredProducts = data.products.filter((product) => product.category === 'Clothing');

  return (
    <div>
      <Banner />
      <ProductList products={filteredProducts} />
    </div>
  )
}
