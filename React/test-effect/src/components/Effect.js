import React, { useEffect, useContext } from 'react'
import EffectContext from '../context/EffectContext'

export const Effect = () => {
  const { effect, setEffect } = useContext(EffectContext)
  useEffect(() => {
    console.log(effect)
  }, [effect])

  const createSideEffect = () => {
    setEffect({
      id: 1,
      status: 'changed'
    })    
  }
  return (
    <button style={{width: '500px', height:'100px', fontSize:'4rem'}} onClick={() => createSideEffect()}>Change</button>
  )
}
