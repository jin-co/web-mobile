import React from 'react'
import spin from '../assets/spinner.gif'

export const Spinner = () => {
  return (
    <div className='w-100 mt-20' alt='loading...'>
      <img src={spin} alt="" width={180} className='text-center mx-auto' />
    </div>
  )
}
