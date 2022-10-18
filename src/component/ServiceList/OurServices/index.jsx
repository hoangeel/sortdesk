import React from 'react'
import "./index.scss"
import { Button, Col, Row} from 'react-bootstrap'
import IMG1 from "assets/img/Data extraction-pana 1.png"
import IMG2 from "assets/img/aaaaa.png"
import IMG3 from "assets/img/Consultative sales-amico 1.png"
import IMG4 from "assets/img/Visionary technology-amico 1.png"

export default function OurServices() {
  return (
    <div className='ServiceList'>
      <h1 className='titleServiceList'>Our Services</h1>
      <div className='DataEngineering'>
        <div className='img'><img src={IMG1} alt="" /></div>
        <div className='content'>
          <h1 className='titleContent'>Data Engineering</h1>
          <p className='textContent'>
            Construction projects often use a wide variety of different tools. We
            can extract this data and visualize it so that you are able to get
            insights into your projects and take action when needed.
          </p>
          <button className='ReadMore'>Read More</button>
        </div>
      </div>
      <div className='DataEngineering WebDevelopment' >
        <div className='content'>
          <h1 className='titleContent'>Web Development</h1>
          <p className='textContent'>
            Collaborating can be a hassle without the right tools. We create
            custom tools that suit your exact needs. From BIM viewers to
            document management systems through estimation; we've got you
            covered.
          </p>
          <button className='ReadMore'>Read More</button>
        </div>
        <div className='img img2'><img src={IMG2} alt="" /></div>
      </div>
      <div className='DataEngineering'>
        <div className='img img3'><img src={IMG3} alt="" /></div>
        <div className='content'>
          <h1 className='titleContent'>Innovation Consulting</h1>
          <p className='textContent'>
            Innovating can be daunting, especially in large organizations. We
            help you define the right strategy, metrics and execution plan in
            order to make your company more productive and profitable.
          </p>
          <button className='ReadMore'>Read More</button>
        </div>
      </div>
      <div className='DataEngineering WebDevelopment'>
        <div className='content'>
          <h1 className='titleContent'>Requirements Engineering</h1>
          <p className='textContent'>
            A good product solves real problems, but these are often hard to
            identify. We help you define, understand, document and validate
            requirements quickly with minimal resources required.
          </p>
          <button className='ReadMore'>Read More</button>
        </div>
        <div className='img img4'><img src={IMG4} alt="" /></div>
      </div>
    </div>
  )
}
