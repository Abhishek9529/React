import React from 'react'
import { useParams } from 'react-router-dom'

const ParamComp = () => {
    const {id} = useParams()
  return (
    <div className='bg-green-300 w-full h-screen flex flex-row items-center justify-center'>
      <h1>Param:{id}</h1>
    </div>
  )
}

export default ParamComp
