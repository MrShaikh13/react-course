import React from 'react'
import LeftTaxt from './LeftTaxt'
import ImageContainer from './ImageContainer'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-18 h-[90vh] flex gap-10 items-center'>
      <LeftTaxt/>
      <ImageContainer users={props.users}/>
    </div>
  )
}

export default Page1Content
