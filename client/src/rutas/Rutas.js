import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import Home from '../components/Home/Dogs'
import About from '../components/About/About'
import Details from '../components/Details/Details'
import Create from '../components/Create/Create'


function Rutas() {
    return (
        <>

            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Route path="/create" component={Create} />           

        </>
    )
}

export default Rutas