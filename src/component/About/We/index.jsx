import React from 'react'
import "./index.scss"
import { Col, InputGroup, Row} from 'react-bootstrap'
import Img from "assets/img/Frame_1.png"
import Python from "assets/img/Frame_2.png"
import JS from "assets/img/Frame_3.png"
import S from "assets/img/sharepoint-icon-4.png"
import Aconex from "assets/img/950px_Aconex_logo.png"
import ProjectWise from "assets/img/download.png"
import Autodesk from "assets/img/autodesk-construction-cloud-logo.png"
import Autodesk360 from "assets/img/e07c97582bf19f7ccef03f530fdfa455.png"

export default function WeBelieve() {
  return (
    <div className='weBelieve'>
      <h1 className='titleWe'>We Believe In Using The Right Tool For The Right Job </h1>
      <div className='flexWe'>
        <div className='img'>
          <img src={Img} alt="" className='img'/>
        </div>
        <div className='content'>
            <h1 className='title'>Technologies</h1>
            <p className='text'>
              Our technology agnostic approach means we are unbiased to specific technologies 
              when it comes to solving your business problems. 
              However, there are some technologies we are particularly good at:
            </p>
            <Row>
              <Col sm={6} className='colContent'>
                <InputGroup className='group'>
                  <img src={Python} alt="Python" />
                  <p className='text'>Python, especially for working with data</p>
                </InputGroup>
              </Col>
              <Col sm={6} className='colContent'>
                <InputGroup className='group'>
                  <img src={JS} alt="JS" />
                  <p className='text'>JavaScript, when developing web applications  </p>
                </InputGroup>
              </Col>
            </Row>
          </div>
      </div>
      <Row>
        <Col lg={7} >
          <div className='content twoText'>
            <p className='text'>
              We are also familiar with a wide range of common construction software solutions like SharePoint, 
              Aconex, ProjectWise, Autodesk Construction Cloud & BIM360.
            </p>
            <p className='text'>Last but not least, coming from the industry, we have great experience working with BIM and the IFC format.</p>
          </div>
        </Col>
        <Col lg={5}>
          <div className='groupLogo'>
            <Row>
              <div className='s'><img src={S} alt="" /></div>
            </Row>
            <Row>
              <Col>
                <div className='aconex'><img src={Aconex} alt="" /></div>
              </Col>
              <Col>
                <div className='projectWise'><img src={ProjectWise} alt="" /></div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='autodesk'><img src={Autodesk} alt="" /></div>
              </Col>
              <Col>
                <div className='autodesk360'><img src={Autodesk360} alt="" /></div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  )
}
