import React, { useContext } from 'react'
import Banner from './Banner'
import ProductList from './ProductList'
import { GlobalContext } from '../context/GlobalContext'

export default function Elctronics() {
  const { products } = useContext(GlobalContext)
  const filteredProducts = products.filter((product) => product.category === 'Electronics');
  return (
    <div>
      <Banner />
      <ProductList products={filteredProducts} />
    </div>
  )
}
