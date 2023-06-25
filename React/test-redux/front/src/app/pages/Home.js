import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

export const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>How can I help you</h1>
        <p>Please choose the an option below</p>
      </section>

      <Link to="/new-ticket" className='btn btn-reverse btn-block'>
        <FaQuestionCircle/> Create new ticket
      </Link>
     
      <Link to="/tickets" className='btn btn-block'>
        <FaTicketAlt/> View my tickets
      </Link>
    </>
  )
}
