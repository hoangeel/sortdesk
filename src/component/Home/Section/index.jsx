import React from 'react'
import "./index.scss"
import { Button, Col, Row} from 'react-bootstrap'

export default function Section() {
  return (
    <Row className='Section'>
      <Col xl={6} lg={5}>
        <div className='content'>
          <h1 className='we'>We develop software for construction companies</h1>
          <p className='Sortdesk'>Sortdesk is a software agency specialized in the AEC industry</p>
          <Button className='ScheduleButton'>Schedule a meeting</Button>
        </div>
      </Col>
      <Col xl={6} lg={7}>
        <div className='img'></div>
      </Col>
    </Row>
  )
}
