import React, { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getTicket, closeTicket } from '../features/ticket/ticketSlice'
import { getNotes, reset, createNote } from '../features/note/noteSlice'
import { Spinner } from '../components/Spinner'
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'
import { NoteItem } from '../components/NoteItem'

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

export const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
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
      toast.error('wrong')
    }
    dispatch(getTicket(ticketId))
    dispatch(getNotes(ticketId))
  })
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
    toast.success('Done')
    navigate('/tickets')
  }
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  const onNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote({ noteText, ticketId }))
    closeModal()
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

      {ticket.status !== 'closed' && (
        <button className="btn" onClick={openModal}>
          <FaPlus /> Add note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add note"
      >
        <h2>Add note</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="note text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </Modal>

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
