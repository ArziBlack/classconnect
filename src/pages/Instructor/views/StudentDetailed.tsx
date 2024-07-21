import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetailed = () => {
    const { studentId } = useParams();
  return (
    <div className='text-white'>StudentDetailed {studentId}</div>
  )
}

export default StudentDetailed