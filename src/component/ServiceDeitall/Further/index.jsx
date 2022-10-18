import React from 'react'
import "./index.scss"
import { Button} from 'react-bootstrap'

export default function Further() {
  return (
    <div className='Further'>
      <p className='text'>Further than just providing you with technical solutions, we are experienced with the specific domain-knowledge needed on construction projects and will help you with setting up your systems and data structures in the most efficient manner. </p>
      <h1 className='title'>Get in touch with us for a free consultation on your data needs. </h1>
      <Button className='buttonSchedule'>Schedule a meeting</Button>
    </div>
  )
}
