import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



function CardDogs({ id, image, name, temperaments, weight }) {
  return (
    <CardStyled>
      <img src={image} alt={name} />
      <h3>Nombre: {name}</h3>
      <h3>Temperamento: {temperaments}</h3>
      <h3>Peso: {weight[0]}-{weight[1]} kg</h3>
      <Link to={`/details/${id}`}>
        <button>IR A DETALLES</button>
      </Link>

    </CardStyled >
  )
}

const CardStyled = styled.div`
display: flex;
flex-direction: column;
width: 230px;
margin:1rem;
margin-left: 1rem;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
border-radius:10px;
padding: 8px;
`

export default CardDogs

