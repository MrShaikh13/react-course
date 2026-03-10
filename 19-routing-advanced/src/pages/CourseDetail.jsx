import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const params = useParams()
  const {id} = params;
  console.log(id)
  return (
    <div>
      <h1> {id} Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail
