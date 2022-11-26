import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LandingPage extends Component {
    render() {
        return (
            <>
                <h1>Proyecto individual Henry Dogs</h1>
                <Link to="/home">
                    <button>Ingresar</button>
                </Link>


            </>
        )
    }
}

export default LandingPage