import React, { useState } from 'react'
import { Redirect } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { getProductQuery, updateProductQuery } from '../queries'
import { useMutation } from '@apollo/react-hooks';

export default function EditProduct({ match }) {
  const id = (match.params.id)
  const { data } = useQuery(getProductQuery, { variables: { id } })
  const [name, setName] = useState(data.product.name)
  const [price, setPrice] = useState(data.product.price)
  const [category, setCategory] = useState(data.product.category)
  const [shortDesc, setShortDesc] = useState(data.product.shortDesc)
  const [description, setDescription] = useState(data.product.description)
  const [redirect, setRedirect] = useState(false)
  const [updateProduct] = useMutation(updateProductQuery);
  const handleSubmit = (e) => {
    e.preventDefault()
    updateProduct({ variables: { id, name, price: parseFloat(price), category, shortDesc, description } })
    setName('')
    setPrice(0)
    setCategory('Health')
    setShortDesc('')
    setDescription('')
    setRedirect(true)
  }
  //const { data, loading, error } = useQuery(getProductQuery, { variables: { id } })
  //if (loading) { return <div>Loading...</div>; }
  //if (error) { return <div>{`Error! ${error.message}`}</div>; }
  return (
    redirect ? <Redirect to='/' /> :
      < form className="py-5" onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="name">Product name</label>
          <input type="text" required className="form-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>

        <div className="form-row">

          <div className="form-group col-md-4">
            <label htmlFor="price">Product price</label>
            <input type="number" required className="form-control" id="price" value={price} onChange={(e) => { setPrice(e.target.value) }} />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="category">Product category</label>
            <select id="category" className="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }}>
              <option>Health</option>
              <option>Kitchen</option>
              <option>Toys</option>
              <option>Electronics</option>
              <option>Clothing</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="img">Product image</label>
            <input type="file" required className="form-control-file" id="img" />
          </div>

        </div>

        <div className="form-group">
          <label htmlFor="shortDesc">Product short Description</label>
          <input type="text" required className="form-control" id="shortDesc" value={shortDesc} onChange={(e) => { setShortDesc(e.target.value) }} />
        </div>

        <div className="form-group">
          <label htmlFor="fullDesc">Product full description</label>
          <textarea type="text" required className="form-control" rows="10" id="fullDesc" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form >
  )

}
