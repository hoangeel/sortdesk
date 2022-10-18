import React from 'react'
import "./index.scss"
import { Col, Row, Card} from 'react-bootstrap'

export default function Insights() {
  return (
    <div className='Insights' >
      <h1 className='title'>Insights</h1>
      <Row className='InsightsVideo'>
        <Col lg={4} sm={6}>
          <Card className='cardVideo'>
            <video 
              src="http://www.w3schools.com/html/mov_bbb.mp4"
              type="" 
              controls 
              autoplay
              className='video'
            />
            <p className='textVideo'>02.05.21</p>
            <h1 className='titleVideo'>BIM Services – What is it and why is it valuable?</h1>
          </Card>
        </Col>
        <Col lg={4} sm={6}>
          <Card className='cardVideo'>
            <video 
              src="http://www.w3schools.com/html/mov_bbb.mp4"
              type="" 
              controls 
              autoplay
              className='video'
            />
            <p className='textVideo'>02.05.21</p>
            <h1 className='titleVideo'>BIM Services – What is it and why is it valuable?</h1>
          </Card>
        </Col>
        <Col lg={4} sm={6}>
          <Card className='cardVideo'>
            <video 
              src="http://www.w3schools.com/html/mov_bbb.mp4"
              type="" 
              controls 
              autoplay
              className='video'
            />
            <p className='textVideo'>02.05.21</p>
            <h1 className='titleVideo'>BIM Services – What is it and why is it valuable?</h1>
          </Card>
        </Col>
      </Row>
      <button className='buttonView'>View</button>
    </div>
  )
}
