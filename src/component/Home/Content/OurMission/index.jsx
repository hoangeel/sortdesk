import React from 'react'
import "./index.scss"
import ImgOur from "assets/img/Sortdesk logo - Mark only - Black-01 1.png"
import HOCHTIEF from "assets/img/Frame 74.png"
import SKANSKA from "assets/img/Frame 74 (1).png"
import STABAG from "assets/img/Frame 75.png"
import BalfourBeatty from "assets/img/Frame 76.png"
import VINCI from "assets/img/Frame 77.png"
import { Col, Row } from 'react-bootstrap'

export default function OurMission() {
  return (
    <>
      <div className='OurMission'>
        <img src={ImgOur} alt="" className='imgOur'/>
        <h1 className='titleOur'>Our mission</h1>
        <p className='textOur'>To make construction as efficient as possible through technology and innovation.</p>
      </div>
      <div className='Companies'>
        <h1 className='titleCompanies'>Trusted by innovative companies</h1>
        <Row>
          <Col><img src={HOCHTIEF} alt="HOCHTIEF" /></Col>
          <Col><img src={SKANSKA} alt="SKANSKA" /></Col>
          <Col><img src={STABAG} alt="STABAG" /></Col>
          <Col><img src={BalfourBeatty} alt="BalfourBeatty" /></Col>
          <Col><img src={VINCI} alt="VINCI" /></Col>
        </Row>
      </div>
    </>
  )
}
