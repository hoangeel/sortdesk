import React from 'react'
import "./index.scss"
import { Button, Nav, Dropdown, Stack } from 'react-bootstrap'
import Logo from "assets/img/Sortdesk logo - Colors-01 1.png"
import IconDropdown from "assets/img/Vector (2).png"
import IconMenu from "assets/img/Frame 7357.png"

export default function Header() {
  return (
    <div className='headerHome' >
      <Stack direction="horizontal" className='stackHome'>
        <div className='logo'><img src={Logo} alt="Logo" /></div>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Dropdown className='Services'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='ServicesDropdown'>
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/3.1"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Data Science and Engineering</p></Dropdown.Item>
                <Dropdown.Item href="#action/3.2"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Web Development</p></Dropdown.Item>
                <Dropdown.Item href="#action/3.3"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Outsourcing</p></Dropdown.Item>
                <Dropdown.Item href="#action/3.4"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Requirements Engineering</p></Dropdown.Item>
                <Dropdown.Item href="#action/3.5"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Innovation Consulting</p></Dropdown.Item>
                <Dropdown.Item href="#action/3.6"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Product Management</p></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home">Process</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Agency</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Insights</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button className='hireButton'>Hire Us</Button>

        <Dropdown className='menu'>
          <Dropdown.Toggle id="dropdown-basic" className='menuDropdown' bsPrefix={{display:"none"}}>
            <img src={IconMenu} alt="IconMenu" />
          </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item href="#action/3.1"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Services</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.1"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Data Science and Engineering</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.2"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Web Development</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.3"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Outsourcing</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.4"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Requirements Engineering</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.5"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Innovation Consulting</p></Dropdown.Item>
              <Dropdown.Item href="#action/3.1.6"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Product Management</p></Dropdown.Item>
            <Dropdown.Item href="#action/3.2"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Process</p></Dropdown.Item>
            <Dropdown.Item href="#action/3.3"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Agency</p></Dropdown.Item>
            <Dropdown.Item href="#action/3.4"><p><span><img src={IconDropdown} alt="IconDropdown" /></span> Insights</p></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
    </div>
  )
}
