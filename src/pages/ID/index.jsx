import React from 'react'
import { useParams } from 'react-router-dom'

const ID = () => {
    const {id} = useParams()

    console.log(id);
    return (
    <div>ID</div>
  )
}

export default ID