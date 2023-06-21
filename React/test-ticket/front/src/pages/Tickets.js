import React, { useEffect } from 'react'
import { BackButton } from '../components/BackButton'
import { TicketItem } from '../components/TicketItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from '../features/ticket/ticketSlice'
import { Spinner } from '../components/Spinner'

export const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTickets())
  }, [])

  if (isLoading) return <Spinner />

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
