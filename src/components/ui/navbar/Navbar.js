import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

import beer from './images/beer.png'

import './Navbar.css'

const Navigation = () => {

    return(
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='navbar-main'>
            <Nav>
               <Nav.Link>
                  <Link to="/" className='navbar-main'><img className='icon' src={beer} alt='home-logo'></img></Link>
               </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation