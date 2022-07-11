import React from 'react'

import Container from 'react-bootstrap/Container'

import './HomeSection.css'

import { Link } from 'react-router-dom'

const HomeSection = ({ title, link }) => {
   
    return(
       <section className='hero'>
          <Container className='container'>
            <Link to={`${link}`} className='btn-link'><h3>{title}</h3></Link>
          </Container>
      </section>
   )
}



export default HomeSection