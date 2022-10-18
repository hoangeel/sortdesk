import React from 'react'
import "./index.scss"
import { Container, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import Footer from 'component/Home/Footer'
import OurServices from 'component/ServiceList/OurServices'


export default function ServiceList() {
  return (
    <div className='home'>
      <Stack  className='backgroundHome '>
        <div className='Background2 '/>
        <div className='Background1 backgroundAbout'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>
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
