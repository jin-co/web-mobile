import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>How can I help you</h1>
        <p>Please choose from ap option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-revers btn-block">
        <FaQuestionCircle /> Create new ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View my tickets
      </Link>
    </>
  )
}

export default Home
