import React from 'react'
import "./index.scss"
import { Button, ButtonGroup, Card, Col, Container, Row, Stack } from 'react-bootstrap'
import Header from 'component/Home/Header'
import Footer from 'component/Home/Footer'


export default function InsightsList() {
  const dataVideo = [
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
    {
      src: "http://www.w3schools.com/html/mov_bbb.mp4",
      title: "BIM Services – What is it and why is it valuable?",
    },
  ]
  return (
    <div className='home'>
      <Stack  className='backgroundHome '>
        <div className='Background2 '/>
        <div className='Background1 backgroundAbout'/>
      </Stack>
      <Container className='contentHome'>
        <Header/>

        <div className='Insights'>
          <h1 className='titleInsights'>Insights</h1>
          <div className='groupButtonTop'>
            <Button className='All'>All</Button>
            <Button className='All'>Services</Button>
          </div>
          <div className='groupButtonBottom'>
            <Button className='All all1'>Data Engineering</Button>
            <Button className='All all2'>Web Development</Button>
            <Button className='All all3'>Innovation Consulting</Button>
            <Button className='All all4'>Requirements engineering</Button>
          </div>
        </div>
        <Row className='groupVideo'>
            {dataVideo.map((index) => {
              return(
                <Col lg={4} sm={6}>
                  <Card className='cardVideo'>
                    <video 
                      src={index.src} 
                      type="" 
                      controls 
                      autoplay
                      className='video'
                    />
                    <p className='textVideo'>02.05.21</p>
                    <h1 className='titleVideo'>{index.title}</h1>
                  </Card>
                </Col>
              )
            })}
        </Row>
        <div className='groupButton'>
          <ButtonGroup className="buttonGroup">
            <Button className="button">1</Button>
            <Button className="button">2</Button>
            <Button className="button">...</Button>
            <Button className="button">5</Button>
          </ButtonGroup>
        </div>
      </Container>

      <div className='colorFooter'>
        <Container className='contentHome'>
          <Footer/>
        </Container>
      </div>
    </div>
  )
}
