import React from "react"

import Col from 'react-bootstrap/Col'

import './Beer-card.css'

const BeerCard = ({name, image_url, tagline, contributed_by}) => {
    return (
        <>
        <Col as="article" className="list-item" xs="5" >
                <img src={image_url} alt={name} />
        </Col>
            <Col xs="7" className="list-item">    
            <div>
                <h5>{name}</h5>
                <p>{tagline}</p>
                <small>Created by {contributed_by}</small>
            </div>
        </Col>
        </>
    )
}

export default BeerCard