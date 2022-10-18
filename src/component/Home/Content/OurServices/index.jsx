import React from 'react'
import "./index.scss"
import Data from "assets/img/Group 1.png"
import Web from "assets/img/Group 1 (1).png"
import Innovation from "assets/img/Group 1 (2).png"
import Requirements from "assets/img/Group 1 (3).png"

import { Button, Card, Col, Row} from 'react-bootstrap'

export default function OurServices() {
  const data = [
    {
      className : "Card CardLeftTop",
      src: Data,
      title: "Data Engineering",
      text: "Construction projects often use a wide variety of different tools. We can extract this data and visualize it so that you are able to get insights into your projects and take action when needed.",
    },
    {
      className : "Card CardRightTop",
      src: Web,
      title: "Web Development",
      text: "Collaborating can be a hassle without the right tools. We create custom tools that suit your exact needs. From BIM viewers to document management systems through estimation; we've got you covered.",
    },
    {
      className : "Card CardLeft",
      src: Innovation,
      title: "Innovation Consulting",
      text: "Innovating can be daunting, especially in large organizations. We help you define the right strategy, metrics and execution plan in order to make your company more productive and profitable.",
    },
    {
      className : "Card CardRight",
      src: Requirements,
      title: "Requirements Engineering",
      text: "A good product solves real problems, but these are often hard to identify. We help you define, understand, document and validate requirements quickly with minimal resources required.",
    },
  ]
  return (
    <>
      <div className='OurServices'>
        <h1 className='titleOurServices'>Our Services</h1>
        <p className='textOurServices'>We create ground-breaking solutions for your unique business needs</p>
      </div>
      <Row className='contentOurServices'>
        {data.map((index) => {
          return(
            <Col>
              <Card className={index.className}>
                <Card.Body className='CardBody'>
                  <Card.Img src={index.src}  className="imgCard"/>
                  <Card.Title className="CardTitle">{index.title}</Card.Title>
                  <Card.Text className="CardText">{index.text}</Card.Text>
                  <Button className="CardButton">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
