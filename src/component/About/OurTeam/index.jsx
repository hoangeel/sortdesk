import React from 'react'
import "./index.scss"
import { Col, InputGroup, Row} from 'react-bootstrap'
import Img from "assets/img/Rectangle 27.png"

export default function OurTeam() {
  return (
    <div className='ourTeam'>
      <div className='img'><img src={Img} alt="" /></div>
      <div className='content'>
        <h1 className='title'>Our team</h1>
        <p className='text'>
          <b>Pierre Monico, Founder:</b> a civil engineer by education, 
          Pierre has worked both in startups and in the BIM industry before switching to Software Engineering. 
          He has worked in international teams in several countries and speaks French, German, and English.
        </p>
      </div>
    </div>
  )
}
