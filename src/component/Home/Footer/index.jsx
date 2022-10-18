import React from 'react'
import "./index.scss"
import { Button, Col, InputGroup, Row} from 'react-bootstrap'

export default function Footer() {
  return (
    <Row className='Footer'>
      <Col  lg={6}>
        <div className='content'>
          <h1 className='Contact'>Contact Us</h1>
          <p className='website'>contact+website@sortdesk.com</p>
          <p className='website phone'>+41 775 380 161</p>
        </div>
        <div className='content'>
          <h1 className='Contact'>Office</h1>
          <p className='website'>Zurich, Switzerland</p>
        </div>
      </Col>
      <Col  lg={6 }>
        <div className='contentRight'>
          <h1 className='let'>Let’s make your project a reality</h1>
          <Button className='ScheduleButton'>Schedule a meeting</Button>
          <div className='content'>
            <h1 className='Contact social'>social</h1>
            <div className='group'>
              <p className='website Github'>Github</p>
              <p className='website linkedin'>linkedin</p>
            </div>
          </div>
        </div>
      </Col>
      <p className='year'>©2022</p>
    </Row>
  )
}
