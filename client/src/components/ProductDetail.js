import React from 'react'
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { getProductQuery, deleteProductQuery } from '../queries'


export default function ProductDetail({ match }) {
  const id = (match.params.id)
  const { data, loading, error } = useQuery(getProductQuery, { variables: { id } })
  const [deleteProduct] = useMutation(deleteProductQuery);
  if (loading) { return <div>Loading...</div>; }
  if (error) { return <div>{`Error! ${error.message}`}</div>; }
  return (
    <>
      <div className=" text-center mt-2">
        <img src="https://via.placeholder.com/500" width="300" height="500" alt="item" />
      </div>
      <div>
        <h5 className="text-center">{data.product.name}</h5>
        <h4 className="text-center">{data.product.price}</h4>
        <h4>Description</h4>
        <p >{data.product.description}</p>
      </div>
      <Link to="" className="btn btn-primary rounded mb-2">Add to cart</Link>
      <Link to={`/edit/${id}`} className="btn btn-primary rounded mb-2">Edit</Link>
      <Link to="/" className="btn btn-primary rounded mb-2" onClick={() => deleteProduct({ variables: { id } })}>Delete</Link>
    </>
  )
}
