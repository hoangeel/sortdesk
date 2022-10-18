import React from 'react'
import "./index.scss"
import { Col, Row} from 'react-bootstrap'
import Img from "assets/img/Data extraction-pana 1.png"

export default function DataEngineering() {
  return (
    <div className='weBelieve'>
      <Row>
        <Col lg={7}>
          <div className='img'>
            <img src={Img} alt="" className='img'/>
          </div>
        </Col>
        <Col lg={5}>
          <div className='content'>
            <h1 className='title'>Data Engineering</h1>
            <p className='text'>
              Construction companies have to deal with ever-growing volumes of data, and it can be difficult to manage 
              and extract valuable insights from that data. Not only does this make the process of decision-making for 
              them harder, but also leads to highly inefficient, time-consuming and redundant work. 
            </p>
            <p className='text'>
              Datasets like documentation, blueprints, BIM models, CDE data etc. are oftentimes poorly interlinked, not 
              indexed, and require a lot of human involvement to maintain.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}
