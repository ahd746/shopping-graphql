import React, { useContext } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import { GlobalContext } from '../context/GlobalContext'

export default function Kitchen() {
  const { products } = useContext(GlobalContext)
  const filteredProducts = products.filter((product) => product.category === 'Kitchen');
  return (
    <div>
      <Banner />
      <ProductList products={filteredProducts} />
    </div>
  )
}
