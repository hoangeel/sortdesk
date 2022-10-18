import React from 'react'
import "./index.scss"
import { Stack, Col, Row, Carousel, Button} from 'react-bootstrap'
import ImgWeUse from "assets/img/Frame (5).png"
import ImgWeWork from "assets/img/Frame (6).png"

export default function CustomerJourney() {
  return (
    <div className='Customer'>
      <Stack direction="horizontal" className='headerCustomer'>
        <h1 className='titele'>Customer Journey</h1>
      </Stack>
      <Row className='contentCustomer'>
        <Col lg={6}>
          <div className='img'></div>
        </Col>
        <Col lg={6}>
          <Carousel variant="dark" className='Carousel' >
            <Carousel.Item >
              <Carousel.Caption>
                <div className='content'>
                  <p className='Step'>01 Step</p>
                  <h1 className='Free'>Free initial consultation</h1>
                  <p className='We'>We discuss your project and its requirements.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Carousel.Caption >
                <div className='content'>
                  <p className='Step'>02 Step</p>
                  <h1 className='Free'>Project plan</h1>
                  <p className='We'>
                    We send you documents containing the project's requirements,
                    schedule, budget and deliverables. Depending on your goals and objectives, we
                    will work either on a project-base or on a time & material basis. we send you
                    documents containing the project's requirements, schedule, budget and
                    deliverables. Depending on your goals and objectives, we will work either on a
                    project-base or on a time & material basis.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
              <Carousel.Caption >
                <div className='content'>
                  <p className='Step'>03 Step</p>
                  <h1 className='Free'>Execution</h1>
                  <p className='We'>
                    After your approval, we work on your project. Communication is done according to what method and or frequency suits you best.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <h1 className='few'>A few extras</h1>
      <div className='footerCustomer'>
        <div className='we'>
          <img src={ImgWeUse} alt=""  className='imgWe'/>
          <p className='textWe'>We use extremely precise time-tracking and can provide you with analytics at any given point in time</p>
        </div>
        <div className='we'>
          <img src={ImgWeWork} alt=""  className='imgWe'/>
          <p className='textWe'>
            We work fully remotely and are used to all modern means of communication like
            Teams, Slack, Zoom, etc. It's also common for us to be added directly to the
            organizations of our clients, i.e. Microsoft 365.
          </p>
        </div>
        <Button className="scheduleButton">Schedule a meeting</Button>
      </div>
    </div>
  )
}

