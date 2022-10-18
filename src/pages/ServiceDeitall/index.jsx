import React from 'react'
import "./index.scss"
import { Container, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import Footer from 'component/Home/Footer'
import DataEngineering from 'component/ServiceDeitall/DataEngineering'
import WeProvide from 'component/ServiceDeitall/WeProvide'
import Further from 'component/ServiceDeitall/Further'


export default function ServiceDeitall() {
  return (
    <div className='home'>
      <Stack  className='backgroundHome '>
        <div className='Background2 '/>
        <div className='Background1 backgroundAbout'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>
        <DataEngineering/>
      </Container>
      <div className='colorOurTeam'>
        <Container className='contentHome'>
          <WeProvide/>
        </Container>
      </div>
      <Container className='contentHome'>
        <Further/>
      </Container>
      <div className='colorFooter'>
        <Container className='contentHome'>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
