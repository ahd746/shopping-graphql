import React from 'react'
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="col-lg-3 col-md-6 my-1 mb-2 text-center selected">
      <Link to={`/${product.id}`} className="item">
        <img src="https://via.placeholder.com/500" className="mt-2" width="150" height="200" alt="item" />
        <div className="card-body">
          <h5 className="card-name">{product.name}</h5>
          <p className="card-text">{product.shortDesc}</p>
          <h4>{product.price}$</h4>
        </div>
      </Link>
      <a href="/" className="btn btn-primary rounded mb-2">Add to cart</a>
    </div >
  )
}
