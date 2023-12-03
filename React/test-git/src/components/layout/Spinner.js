import React from 'react'
import spinner from './assets/spinner.gif'

export const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img src={spinner} alt="" width={180} className='text-center mx-auto' />
    </div>
  )
}
