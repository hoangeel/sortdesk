import React from 'react'
import "./index.scss"
import { Card, Col, Row} from 'react-bootstrap'
import Normalization from "assets/img/servire0.png"
import Connectors from "assets/img/servire4.png"
import ETL from "assets/img/servire3.png"
import Dashboarding from "assets/img/servire2.png"
import BIM from "assets/img/servire1.png"

export default function WeProvide() {
  const datas = [
    {
      img: Normalization,
      title: "Data normalization and indexin",
      text: "We can structure and clean your data before indexing it so that you'll find the information you need in no time.",
    },
    {
      img: Connectors,
      title: "Data connectors",
      text: "We are able to connect to various source systems, like Excel, SharePoint and Aconex. We can develop custom connectors for most systems on-demand.",
    },
    {
      img: ETL,
      title: "ETL",
      text: "We apply the well-known extract, transform, load paradigm to interlink various data in almost real-time and make it available wherever you need, however you need it. ",
    },
    {
      img: Dashboarding,
      title: "Dashboarding & analytics",
      text: "Nothing beats charts and graphics when it comes to convey important information, helping you make data-driven decisions. ",
    },
    {
      img: BIM,
      title: "BIM data",
      text: "We help with the Information part of BIM, i.e. matching it with your internal Work Breakdown Structure and highlighting quality issues in property sets. ",
    },
  ]
  return (
    <div className='WeProvide'>
      <h1 className='title'>We provide a wide range of data services to solve these problems, including but not limited to:</h1>
      <Row>
          {datas.map((data, index) => {
            const {img, title, text} = data;
            return(
              <Col xl={4}  md={6} key={data}>
                <Card className='content'>
                  <img className='img' src={img} alt="" />
                  <h1 className='titleContent'>{title}</h1>
                  <p className='text'>{text}</p>
                </Card>
              </Col>
          )
          })}
      </Row>
    </div>
  )
}
