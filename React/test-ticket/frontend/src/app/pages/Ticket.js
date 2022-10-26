import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTicket, closeTicket } from '../../features/tickets/ticketSlice'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getNotes, reset } from '../../features/notes/noteSlice'
import NoteItem from '../components/NoteItem'

const Ticket = () => {
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  )

  const { notes, isLoading: noteIsLoading } = useSelector(
    (state) => state.notes
  )

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  useEffect(() => {
    if (isError) {
      toast.error('Wrong information')
    }
    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
  }, [isError, message, ticketId])

  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('Ticket closed')
    navigate('/tickets')
  }

  if (isLoading || noteIsLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h3>A problem</h3>
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>

        <h3>Product: {ticket.product}</h3>

        <hr />
        <div className="ticket-desc">
          <h3>Description of the issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
      </header>

      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}

      {ticket.status !== 'closed' && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close ticket
        </button>
      )}
    </div>
  )
}

export default Ticket
