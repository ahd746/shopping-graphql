import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks';
import { Redirect } from "react-router-dom";
import { addProductQuery } from '../queries'

export default function AddProduct() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('Health')
  const [shortDesc, setShortDesc] = useState('')
  const [description, setDescription] = useState('')
  const [redirect, setRedirect] = useState(false)
  const [addProduct] = useMutation(addProductQuery)
  const handleSubmit = (e) => {
    e.preventDefault()
    addProduct({ variables: { name, price: parseFloat(price), category, shortDesc, description } })
    setName('')
    setPrice(0)
    setCategory('Health')
    setShortDesc('')
    setDescription('')
    setRedirect(true)
  }

  return (
    redirect ? <Redirect to='/' /> :
      <form className="py-5" onSubmit={handleSubmit}>
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

        <button type="submit" className="btn btn-primary">Add</button>
      </form>
  )
}
