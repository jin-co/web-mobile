import { useEffect } from 'react'
import { BackButton } from '../components/BackButton'
import { TicketItem } from '../components/TicketItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTickets } from '../../features/tickets/ticketSlice'
import { Spinner } from '../components/Spinner'

export const Tickets = () => {
  const { tickets } = useSelector((state) => state.ticket)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTickets())
  }, [dispatch])  
  return (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  )
}
