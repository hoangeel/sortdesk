import React from 'react'
import "./index.scss"
import { Container, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import WeBelieve from 'component/About/We'
import OurTeam from 'component/About/OurTeam'
import OurServices from 'component/Home/Content/OurServices'
import Footer from 'component/Home/Footer'


export default function About() {
  return (
    <div className='home'>
      <Stack  className='backgroundHome '>
        <div className='Background2 '/>
        <div className='Background1 backgroundAbout'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>
        <WeBelieve/>
      </Container>
      <div className='colorOurTeam'>
        <Container className='contentHome'>
          <OurTeam/>
        </Container>
      </div>
      <Stack  className='backgroundHome'>
        <div className='OurServicesBackground1'/>
        <div className='OurServicesBackground2'/>
      </Stack>
      <Container className='contentHome'>
        <OurServices/>
      </Container>
      <div className='colorFooter'>
        <Container className='contentHome'>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
