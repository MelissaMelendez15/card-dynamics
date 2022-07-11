import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Switch, Route  } from 'react-router-dom'

import NavBar from './ui/navbar/Navbar'
import Home from './pages/home/index'
import BeersList from './pages/beersList/BeersList';
import Footer from './ui/footer/Footer';



const App = () => {
  return (
    <>
     <NavBar />
     <Switch>
        <Route path="/beers" render={() => <BeersList />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
      <Footer />
   </>
  );
}

export default App;
