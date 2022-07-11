import React, { Component } from 'react'
import BeersService from '../../../service/BeerService'

import BeerCard from './Beer-card'
import SearchBar from './searchBar'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'


import './BeersList.css'

class BeersList extends Component {
    constructor() {
        super()
        this.state = {
            beers: undefined,
            beersFiltered: undefined
        }
        this.beerService = new BeersService()
    }

    componentDidMount = () => this.updateBeerList()

    updateBeerList = () => {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({ beers: response.data, beersFiltered: response.data }))
            .catch(err => console.log(err))
    }

    filterProducts = word => {
        console.log(word)
        const beersCopy = [...this.state.beers]
        const beersFiltered = beersCopy.filter(elm => elm.name.toLowerCase().includes(word.toLowerCase()))
        this.setState({ beersFiltered })
    }

   render() {
        const beerItems = !this.state.beersFiltered ? <div className='spinner-container'><Spinner animation="border" role="status" /></div> : this.state.beersFiltered.map(beer => <BeerCard {...beer}/>)
        return(
            <>
            <Container as="main" className="main-beers" fluid>
                <SearchBar filterProducts={this.filterProducts}/>
                <Row>
                    {beerItems}
                </Row>
            </Container>
            </>
        )
    }
}


export default BeersList