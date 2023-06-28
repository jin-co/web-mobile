import { useDispatch, useSelector } from "react-redux"
import { BackButton } from "../components/BackButton"
import Modal from 'react-modal'
import { FaPlus } from 'react-icons/fa'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import { getTicket, closeTicket } from "../../features/tickets/ticketSlice"
import { Spinner } from "../components/Spinner"

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

export const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const { ticket, isLoading } = useSelector(state => state.ticket)

  useEffect(() => {
    dispatch(getTicket(params.ticketId))
  }, [])

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const onTicketClose = () => {
    dispatch(closeTicket(params.ticketId))
    toast.success('Ticket closed')
    navigate('/tickets')
  }

  const onNoteSubmit = (e) => {

  }

  if (isLoading) {
    return <Spinner />
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

      {/* {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))} */}

      {ticket.status !== 'closed' && (
        <button className="btn btn-block btn-danger" onClick={onTicketClose}>
          Close ticket
        </button>
      )}
    </div>
  )
}
