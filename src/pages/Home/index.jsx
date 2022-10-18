import React from 'react'
import "./index.scss"
import { Container, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import Section from 'component/Home/Section'
import OurMission from 'component/Home/Content/OurMission'
import OurServices from 'component/Home/Content/OurServices'
import What from 'component/Home/Content/What'
import CustomerJourney from 'component/Home/Content/CustomerJourney'

import imgTestimonials from "assets/img/Frame 7376.png"
import Testimonials from 'component/Home/Content/Testimonials'
import Insights from 'component/Home/Content/Insights'
import Footer from 'component/Home/Footer'

export default function Home() {
  return (
    <div className='home'>
      <Stack  className='backgroundHome'>
        <div className='Background2'/>
        <div className='Background1'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>
        <Section/>
      </Container>
      <OurMission/>
      <Stack  className='backgroundHome'>
        <div className='OurServicesBackground1'/>
        <div className='OurServicesBackground2'/>
      </Stack>
      <Container className='contentHome'>
        <OurServices/>
      </Container>
      <div className='colorWhat'>
        <Container className='contentHome'>
          <What/>
        </Container>
      </div>
      <div className='colorCustomer'>
        <Container className='contentHome'>
          <CustomerJourney/>
        </Container>
      </div>
      <div className='backgroundHome'>
        <img src={imgTestimonials} alt=""  className='TestimonialsBackground'/>
      </div>
      <Container className='contentHome'>
        <Testimonials/>
      </Container>
      <div className='colorWhat'>
        <Container className='contentHome'>
          <Insights/>
        </Container>
      </div>
      <div className='colorFooter'>
        <Container className='contentHome'>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
