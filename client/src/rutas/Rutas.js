import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import Nav from '../components/Nav/Nav'
import Home from '../components/Home/Dogs'
import About from '../components/About/About'
import Details from '../components/Details/Details'
import Footer from '../Footer/Footer'

function Rutas() {
    return (
        <>
            <Nav />
            <Route exact path="/" component={LandingPage} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={Details} />
            <Footer />


        </>
    )
}

export default Rutas