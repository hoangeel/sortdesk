import React from 'react'
import "./index.scss"
import We from "assets/img/Frame (1).png"
import Crazy from "assets/img/Frame (2).png"
import Top from "assets/img/Frame (3).png"

import { Card, Col, Stack, Row} from 'react-bootstrap'

export default function What() {
  return (
    <div className='what'>
      <h1 className='titleWhat'>What makes us different</h1>
      <p className='textWhat'>We’re a unique blend of construction specialists and software engineers</p>
      <div className='contentWhat'>
          <Card className="card we">
            <Card.Body className='CardBody'>
                <div className="imgCard">
                  <Card.Img src={We} />
                </div>
                <div className="contentCard" >
                  <Card.Title className="CardTitle">We speak construction</Card.Title>
                  <Card.Text className="CardText">
                    Having a background in construction and BIM, we understand your
                    problems; you won't have to reformulate it in evelopers terms.
                    Less friction in communication means better products.
                  </Card.Text>
                </div>
            </Card.Body>
          </Card>
          <Card className="card Crazy">
            <Card.Body className='CardBody'>
                <div className="imgCard">
                  <Card.Img src={Crazy}  />
                </div>
                <div className="contentCard">
                  <Card.Title className="CardTitle">Crazy agile</Card.Title>
                  <Card.Text className="CardText">
                    We favor execution over planning. Releasing early and often, we
                    collaborate with your team and constantly gather feedback to
                    make sure that product really fits their needs.
                  </Card.Text>
                </div>
            </Card.Body>
          </Card>
          <Card className="card top">
            <Card.Body className='CardBody'>
              <div className="imgCard">
                <Card.Img src={Top}  />
              </div>
              <div className="contentCard">
                <Card.Title className="CardTitle">Top-notch technology</Card.Title>
                <Card.Text className="CardText">
                  As nerds at heart, we always use the best and most modern
                  technologies to get the job done. We strive for software that is
                  maintainable, scalable, and secure.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
      </div>
    </div>
  )
}
