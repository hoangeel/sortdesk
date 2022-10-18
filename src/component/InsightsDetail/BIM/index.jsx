import React from 'react'
import "./index.scss"
import { Card, Col, Row} from 'react-bootstrap'
import IMG1 from 'assets/img/Rectangle 28.png'
import IMG2 from 'assets/img/Rectangle 29.png'

export default function BIM() {
  return (
    <div className='BIM'>
      <h1 className='titleBIM'>BIM Services – What is it and why is it valuable?</h1>
      <div className='imgBIM'><img src={IMG1} alt="" /></div>
      <Row>
        <Col md={6}>
          <div>
            <h1 className='whatIsBIM'>What is BIM Services?</h1>
            <p className='textWhatTop'>
              Building Information Modeling (BIM) software has gained popularity over the past several years as the new 
              standard for the design, documentation, and execution of construction projects. Combining intricate building 
              data with the project’s design elements, BIM enables architects, designers, engineers, and other consultants 
              to create a completely digital and robustly intelligent model of the project before the planning phase is complete 
            </p>
            <p className='textWhatTop textWhatBottom'>
              – in fact, BIM services are not only performed prior to construction but the detailed models are 
              adjusted and revised throughout the construction process in order to maintain an exact, precise representation 
              of the physical structure. BIM services now play an integral role in various projects and enable more accurate, 
              ‘constructable’, and user-oriented buildings to be built.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h1 className='whatIsBIM'>What is BIM Services?</h1>
            <p className='textWhatTop'>
              BIM services are provided in order for owners, developers, and stakeholders to review new projects with 
              unprecedented detail. Aside from capturing the physical building design, BIM services provide the ability 
              to evaluate potential design options.. More than just architectural model visualization, electrical, 
              plumbing, HVAC, fire protection systems, and more can also be tested and analyzed to ensure that the 
              building will meet the needs of its occupants and provide the appropriate functionality, safety features, 
              and compatibility for general daily operation.
            </p>
            <p className='textWhatTop textWhatBottom'>
              It may seem that BIM is focused more on providing the basis for actual construction, but it doesn’t end 
              there. By engaging a provider for BIM services, various projects can be executed more efficiently and 
              without the excess costs associated with material waste, scheduling issues, and other negative elements 
              that are common with construction. When BIM services are performed, these inefficiencies are flushed out 
              and corrected before breaking ground so that the project can be executed with tighter timelines and less 
              waste.
            </p>
          </div>
        </Col>
      </Row>
      <div className='imgBIM'><img src={IMG2} alt="" /></div>
      <Row>
        <Col md={6}>
          <div>
            <h1 className='whatIsBIM'>What Are Included in BIM Services?</h1>
            <p className='textWhatTop'>
              BIM services can be tailored to meet the needs of the client, but always include a comprehensive digital 
              representation of the project in 3D form. From there, data built into the model can be used to generate 
              material take-offs, budget line items, schedule data, and more that can help projects run far more smoothly 
              than with traditional building processes.. Other services that can be applied include 4D construction 
              scheduling and site logistics, 5D cost monitoring and procurement management, MEP modeling, 3D as-built 
              drawings and related documentation, as well as clash detection and risk mitigation.
            </p>
            <p className='textWhatTop textWhatBottom'>
              It may seem that BIM is focused more on providing the basis for actual construction, but it doesn’t end there. 
              By engaging a provider for BIM services, various projects can be executed more efficiently and without the 
              excess costs associated with material waste, scheduling issues, and other negative elements that are common 
              with construction. When BIM services are performed, these inefficiencies are flushed out and corrected before 
              breaking ground so that the project can be executed with tighter timelines and less waste.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <h1 className='whatIsBIM'>What Are Included in BIM Services?</h1>
            <p className='textWhatTop'>
              BIM services can be tailored to meet the needs of the client, but always include a comprehensive digital 
              representation of the project in 3D form. From there, data built into the model can be used to generate 
              material take-offs, budget line items, schedule data, and more that can help projects run far more smoothly 
              than with traditional building processes.. Other services that can be applied include 4D construction 
              scheduling and site logistics, 5D cost monitoring and procurement management, MEP modeling, 3D as-built 
              drawings and related documentation, as well as clash detection and risk mitigation.
            </p>
            <p className='textWhatTop textWhatBottom'>
              It may seem that BIM is focused more on providing the basis for actual construction, but it doesn’t end there. 
              By engaging a provider for BIM services, various projects can be executed more efficiently and without the 
              excess costs associated with material waste, scheduling issues, and other negative elements that are common 
              with construction. When BIM services are performed, these inefficiencies are flushed out and corrected before 
              breaking ground so that the project can be executed with tighter timelines and less waste.
            </p>
          </div>
        </Col>
      </Row>
      <h1 className='titleRelated'>Related insights</h1>
      <Row className='RelatedVideo'>
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
    </div>
  )
}