import React from 'react'
import { BackButton } from '../components/BackButton'

export const NewTicket = () => {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <BackButton url="/" />
      <section className="heading">
        <h1>Create new ticket</h1>
        <p>Fill out the form below</p>
      </section>

      {/* <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer name</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="name">Customer email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="Phone">Phone</option>
              <option value="Max">Max</option>
              <option value="Pad">Pad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block" type='submit'>Submit</button>
          </div>
        </form>
      </section> */}
    </>
  )
}