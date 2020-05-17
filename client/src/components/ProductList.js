import React from 'react'
import Product from './Product'

export default function ProductList({ products }) {
  return (
    <div className="py-5">
      <div className="row">
        {
          products.length ?
            products.map((product) => <Product key={product.id} product={product} />)
            :
            <div className="container">
              <p className="text-center">No products found, check back later</p>
            </div>
        }
      </div>
    </div >
  )
}
