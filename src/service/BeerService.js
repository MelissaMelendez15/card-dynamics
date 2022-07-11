import Axios from 'axios'

export default class BeersService {

    constructor() {
        this.service = Axios.create({
            baseURL: 'https://api.punkapi.com/v2/beers'
        })
    }

    getAllBeers = () => this.service.get('/')
    getFilterdBeers = query  => this.service.get(`/search?q=${query}`)
}