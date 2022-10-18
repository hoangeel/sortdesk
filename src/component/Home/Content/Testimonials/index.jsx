import React from 'react'
import "./index.scss"
import { Carousel, InputGroup} from 'react-bootstrap'
import ImgTestimonials from "assets/img/Group 7232.png"
import Star from "assets/img/Star 1.png"
import Avatar from "assets/img/Ellipse 14.png"

export default function Testimonials() {
  return (
    <>
      <div className='testimonials'>
        <img src={ImgTestimonials} alt="" className='img'/>
        <h1 className='title'>Testimonials</h1>
        <p className='text'>What our clients are saying</p>
      </div>

      <Carousel variant="dark" className='sayingCarousel'>
        <Carousel.Item >
          <Carousel.Caption>
            <div className='saying'>
              <p className='text'>
                Sortdesk’s combination of construction domain knowledge and technical skills 
                makes it a strong partner in technology implementations in the construction industry. 
                We were very satisfied with the service we received- Sortdesk has both an agile and a 
                professional working style- providing the flexibility as well as reliability we need 
                in complex technology implementations.
              </p>
              <InputGroup className='groupStar'>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" />
              </InputGroup>
              <img src={Avatar} alt="" className='avatar'/>
              <p className='name'>Elif Koru</p>
              <p className='textName'>BIM Manager, Hochtief ViCon</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption >
          <div className='saying'>
              <p className='text'>
                Sortdesk’s combination of construction domain knowledge and technical skills 
                makes it a strong partner in technology implementations in the construction industry. 
                We were very satisfied with the service we received- Sortdesk has both an agile and a 
                professional working style- providing the flexibility as well as reliability we need 
                in complex technology implementations.
              </p>
              <InputGroup className='groupStar'>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" />
              </InputGroup>
              <img src={Avatar} alt="" className='avatar'/>
              <p className='name'>Elif Koru</p>
              <p className='textName'>BIM Manager, Hochtief ViCon</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <Carousel.Caption >
          <div className='saying'>
              <p className='text'>
                Sortdesk’s combination of construction domain knowledge and technical skills 
                makes it a strong partner in technology implementations in the construction industry. 
                We were very satisfied with the service we received- Sortdesk has both an agile and a 
                professional working style- providing the flexibility as well as reliability we need 
                in complex technology implementations.
              </p>
              <InputGroup className='groupStar'>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" />
              </InputGroup>
              <img src={Avatar} alt="" className='avatar'/>
              <p className='name'>Elif Koru</p>
              <p className='textName'>BIM Manager, Hochtief ViCon</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
