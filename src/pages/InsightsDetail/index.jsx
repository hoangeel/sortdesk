import React from 'react'
import "./index.scss"
import { Container, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import Footer from 'component/Home/Footer'
import BIM from 'component/InsightsDetail/BIM'


export default function InsightsDetail() {
  
  return (
    <div className='home'>
      <Stack  className='backgroundHome '>
        <div className='Background2 '/>
        <div className='Background1 backgroundAbout'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>
        <BIM/>
      </Container>
      <div className='colorFooter'>
        <Container className='contentHome'>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
